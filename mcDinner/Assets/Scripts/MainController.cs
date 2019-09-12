﻿using System.Collections;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class MainController : MonoBehaviour
{
    public static bool isGaming;
    public static float screenWidth;
    public static float screenHeight;
    public static int sum;
    public static bool mute;
    public Player _player;
    public GameObject _moonCake;
    public GameObject _moonCake2;
    public GameObject _moonCake3;
    public GameObject _bomb;
    public GameObject _fish;
    public GameObject _banana;
    public GameObject _check;
    public GameObject MainMenu;
    public GameObject GameUI;
    public GameObject GameOverUI;
    public Text GameOverTitle;
    public Text GameOverScore;
    public Text GameOverCause;
    public AudioClip MenuAudio;
    public AudioClip GameAudio;

    private Player player;
    private GameObject check;
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
        Record.LoadMute();
        Record.LoadAcceleration();
        mute = Record.mute;
        GetComponent<AudioSource>().clip = MenuAudio;
        GetComponent<AudioSource>().Play();
        GetComponent<AudioSource>().mute = mute;
        Time.timeScale = 1;
    }

    // Update is called once per frame
    void Update()
    {
        if (startGame)
        {
            if (isGaming)
            {
                if (Input.GetMouseButton(0))
                    Player.acceleration = 2 * Record.acceleration;
                else
                    Player.acceleration = Record.acceleration;
                check.transform.position = new Vector3(player.transform.position.x, player.transform.position.y, 0);
            }
            else
            {
                EndGame();
                Time.timeScale = 0;
            }
        }
    }

    public void StartGame()
    {
        Time.timeScale = 1;
        startGame = true;
        isGaming = true;
        player = Instantiate(_player, new Vector3(0, 0, 0), Quaternion.identity);
        InvokeRepeating("Count", 2f, 2f);
        GetComponent<AudioSource>().clip = GameAudio;
        GetComponent<AudioSource>().Play();
        check = Instantiate(_check, new Vector3(0, 0, 0), Quaternion.identity);
    }
    public void PauseGame()
    {
        Time.timeScale = 0;
        GetComponent<AudioSource>().Pause();
    }
    public void ContinueGame()
    {
        isGaming = true;
        Time.timeScale = 1;
        GetComponent<AudioSource>().UnPause();
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
        Time.timeScale = 1;
        SceneManager.LoadScene(1);
        GetComponent<AudioSource>().clip = MenuAudio;
        GetComponent<AudioSource>().Play();
    }

    private void EndGame()
    {
        GetComponent<AudioSource>().Stop();
        CancelInvoke("Count");
        if(TimeCount.End == true)
        {
            GameOverCause.text = "时间到";
        }
        else
        {
            GameOverCause.text = "游戏结束";
        }
        if (player != null && Player.score > 1000)
        {
            GameOverTitle.text = "你太nb了";
        }
        else if (player != null && Player.score < 200)
        {
            GameOverTitle.text = "多吃点月饼也不会胖哦";
        }
        else
        {
            GameOverTitle.text = "哎哟 不错哦";
        }
        GameOverScore.text = "" + Player.score;
        GameOverUI.SetActive(true);
        startGame = false;
        Record.LoadScore();
        if (Player.score > Record.score) { Record.SaveScore(); }
    }

    public void Spawn()
    {
        Vector3 position = new Vector3(Random.Range(-screenWidth / 2 + moonCakeRadius, screenWidth / 2 - moonCakeRadius),
            Random.Range(-screenHeight / 2 + moonCakeRadius, 0.85f * screenHeight / 2 - moonCakeRadius), 0);
        if (Physics2D.OverlapCircle(position, moonCakeRadius) == null)
        {
            int random = Random.Range(0, 12);
            if (random > 11)
                Instantiate(_moonCake, position, Quaternion.identity);
            else if (random > 8)
                Instantiate(_moonCake2, position, Quaternion.identity);
            else if (random > 5)
                Instantiate(_moonCake3, position, Quaternion.identity);
            else
            {
                GameObject gameObject;
                if (random > 3)
                {
                    gameObject = Instantiate(_bomb, position, Quaternion.identity);
                }
                else if (random > 1)
                {
                    gameObject = Instantiate(_banana, position, Quaternion.identity);
                }
                else
                {
                    gameObject = Instantiate(_fish, position, Quaternion.identity);
                }
                Destroy(gameObject, 10f);
                Invoke("sub", 10f);
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
        GetComponent<AudioSource>().Stop();
        Application.Quit();
    }
}   
