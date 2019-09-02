using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MainController : MonoBehaviour
{
    static bool isGaming;
    public static float screenWidth;
    public static float screenHeight;
    public static int sum;
    public Player _player;
    public GameObject _moonCake;
    private Player player;
    private bool isPause;
    private float moonCakeRadius;

     void Start()
    {
        isGaming = false;
        this.isPause = false;
        screenHeight = Camera.main.orthographicSize * 2;
        screenWidth = screenHeight * Screen.width / Screen.height;
        moonCakeRadius = _moonCake.GetComponent<SpriteRenderer>().size.y / 2;
        sum = 0;
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public void StartGame()
    {
        isGaming = true;
        this.player = Instantiate(_player);
        if (isGaming)
        {
            InvokeRepeating("Count", 2f, 2f);
        }
    }

    public void Spawn()
    {
        Vector3 position = new Vector3(UnityEngine.Random.Range(-screenWidth / 2 + moonCakeRadius, screenWidth / 2 - moonCakeRadius),
            UnityEngine.Random.Range(-screenHeight / 2 + moonCakeRadius, screenHeight / 2 - moonCakeRadius), 0);
        if (Physics2D.OverlapCircle(position, moonCakeRadius) == null)
        {
            Instantiate(_moonCake, position, Quaternion.identity);
        }
        else Spawn();
    }
    public void Count()
    {
        System.Random ran = new System.Random();
        int total = ran.Next(3, 7);
        while (sum < total)
        {
            Spawn();
            sum++;
        }
    }

    public void Exit()
    {
        Application.Quit();
    }
}   
