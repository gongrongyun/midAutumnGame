using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class MainController : MonoBehaviour
{
    public static bool isGaming;
    public static float screenWidth;
    public static float screenHeight;
    public static int sum;
    public Player _player;
    public GameObject _moonCake;
    public GameObject _moonCake2;
    public GameObject _moonCake3;
    public GameObject _bomb;
    public GameObject MainMenu;
    public GameObject GameUI;
    public GameObject GameOverUI;
    public Text GameOverTitle;
    public Text GameOverScore;

    private Player player;
    private float moonCakeRadius;
    private bool startGame;

     void Start()
    {
        startGame = false;
        isGaming = false;
        screenHeight = Camera.main.orthographicSize * 2;
        screenWidth = screenHeight * Screen.width / Screen.height;
        moonCakeRadius = _moonCake.GetComponent<SpriteRenderer>().size.y / 2;
        sum = 0;
    }

    // Update is called once per frame
    void Update()
    {
        if (startGame)
        {
            if (isGaming)
            {
                if (Input.GetMouseButton(0))
                    Player.acceleration = 2f;
                else
                    Player.acceleration = 0.5f;
            }
            else
            {
                EndGame();
            }
        }
    }

    public void StartGame()
    {
        startGame = true;
        isGaming = true;
        player = Instantiate(_player, new Vector3(0, 0, 0), Quaternion.identity);
        InvokeRepeating("Count", 2f, 2f);
    }
    public void PauseGame()
    {
        Time.timeScale = 0;
    }
    public void ContinueGame()
    {
        isGaming = true;
        Time.timeScale = 1;
    }
    public void ReStart()
    {
        StartCoroutine(LoadScene());
    }
     
    IEnumerator LoadScene()
    {
        AsyncOperation async = SceneManager.LoadSceneAsync(1);

        while (!async.isDone)
        {
            yield return null;
        }
        if (async.isDone)
        {
            MainMenu.SetActive(false);
            GameUI.SetActive(true);
            StartGame();
        }
    }

    public void BackToMain()
    {
        SceneManager.LoadScene(1);
    }

    private void EndGame()
    {
        CancelInvoke("Count");
        if (player != null && Player.score > 1000)
        {
            GameOverTitle.text = "你太nb了";
        } else if(player != null && Player.score < 200)
        {
            GameOverTitle.text = "多吃点月饼也不会胖哦";
        } else
        {
            GameOverTitle.text = "哎哟 不错哦";
        }
        GameOverScore.text = "" + Player.score;
        GameOverUI.SetActive(true);
        startGame = false;
    }

    public void Spawn()
    {
        Vector3 position = new Vector3(UnityEngine.Random.Range(-screenWidth / 2 + moonCakeRadius, screenWidth / 2 - moonCakeRadius),
            UnityEngine.Random.Range(-screenHeight / 2 + moonCakeRadius, 0.85f * screenHeight / 2 - moonCakeRadius), 0);
        if (Physics2D.OverlapCircle(position, moonCakeRadius) == null)
        {
            int random = UnityEngine.Random.Range(0, 10);
            Debug.Log(random);
            GameObject gameObject = new GameObject();
            if (random > 4)
                Instantiate(_moonCake, position, Quaternion.identity);
            else if (random == 2)
                Instantiate(_moonCake2, position, Quaternion.identity);
            else if (random == 1)
                Instantiate(_moonCake3, position, Quaternion.identity);
            else
            {
                gameObject = Instantiate(_bomb, position, Quaternion.identity);
                Destroy(gameObject, 6f);
                Invoke("sub", 6f);
            }
        }
        else Spawn();
    }
    public void Count()
    {
        System.Random ran = new System.Random();
        int total = ran.Next(3, 8);
        while (sum < total)
        {
            Spawn();
            sum++;
        }
    }
    public void sub()
    {
        sum--;
    }

    public void Exit()
    {
        Application.Quit();
    }
}   
