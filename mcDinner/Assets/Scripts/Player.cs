using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Player : MonoBehaviour
{
    public Player player;
    public AudioClip Eat;
    public AudioClip Hard;
    public AudioClip Hey;
    public static int quality;
    public static int score;
    public static float acceleration;
    private Rigidbody2D rig;
    private float horizontal;
    private float vertical;
    private float radius;

    // Start is called before the first frame update
    void Start()
    {
        acceleration = 0.25f;
        quality = 20;
        score = 0;
        rig = GetComponent<Rigidbody2D>();
        radius = GetComponent<Collider2D>().bounds.size.y / 2;
    }

    // Update is called once per frame
    void FixedUpdate()
    {
        if (MainController.isGaming)
        {
            Move();
            Debug.Log(rig.velocity);
        }
    }

    private void Move()
    {
        //horizontal = Input.acceleration.x;
        //vertical = Input.acceleration.y;
        horizontal = Input.GetAxisRaw("Horizontal");
        vertical = Input.GetAxisRaw("Vertical");
        float vx = rig.velocity.x + horizontal * Time.fixedDeltaTime * acceleration;
        if (vx > 1)
        {
            vx = 1;
        }
        if (vx < -1)
        {
            vx = -1;
        }
        float vy = rig.velocity.y + vertical * Time.fixedDeltaTime * acceleration;
        if (vy > 1)
        {
            vy = 1;
        }
        if (vy < -1)
        {
            vy = -  1;
        }
        rig.velocity = new Vector2(vx, vy);
        if (rig.position.x + radius > MainController.screenWidth / 2)
        {
            rig.position = new Vector2(MainController.screenWidth / 2 - radius, rig.position.y);
            rig.velocity = new Vector2(-rig.velocity.x * 0.5f, rig.velocity.y);
        }
        if (rig.position.x - radius < -MainController.screenWidth / 2)
        {
            rig.position = new Vector2(-MainController.screenWidth / 2 + radius, rig.position.y);
            rig.velocity = new Vector2(-rig.velocity.x * 0.5f, rig.velocity.y);
        }
        if (rig.position.y + radius > 0.85f * MainController.screenHeight / 2)
        {
            rig.position = new Vector2(rig.position.x, 0.85f * MainController.screenHeight / 2 - radius);
            rig.velocity = new Vector2(rig.velocity.x, -rig.velocity.y * 0.5f);
        }
        if (rig.position.y - radius < -MainController.screenHeight / 2)
        {
            rig.position = new Vector2(rig.position.x, -MainController.screenHeight / 2 + radius);
            rig.velocity = new Vector2(rig.velocity.x, -rig.velocity.y * 0.5f);
        }
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.gameObject.tag == "MoonCake")
        {
            PlayAudio(Eat);
            GameUIController.Combo("1");
            quality += 30;
            if (quality > 100)
            {
                quality = 100;
            }
            score += 5;
            MainController.sum--;
        }
        if (collision.gameObject.tag == "Bomb")
        {
            PlayAudio(Hey);
            GameUIController.cakes.Clear();
            quality -= 60;
            if (quality <= 0)
            {
                quality = 0;
                MainController.isGaming = false;
            }
            score += 5;
            rig.velocity = new Vector2(0, 0);
        }
        if (collision.gameObject.tag == "Fish")
        {
            PlayAudio(Hard);
            Handheld.Vibrate();
            GameUIController.cakes.Clear();
            quality = 0;
            MainController.isGaming = false;
            rig.velocity = new Vector2(0, 0);
        }
        if (collision.gameObject.tag == "Banana")
        {
            PlayAudio(Hey);
            GameUIController.cakes.Clear();
            quality -= 30;
            if (quality <= 0)
            {
                quality = 0;
                MainController.isGaming = false;
            }
            rig.velocity = new Vector2(0, 0);
        }
        if (collision.gameObject.tag == "MoonCake2")
        {
            PlayAudio(Eat);
            GameUIController.Combo("2");
            quality += 5;
            if (quality > 100)
            {
                quality = 100;
            }
            score += 20;
            MainController.sum--;
        }
        if (collision.gameObject.tag == "MoonCake3")
        {
            PlayAudio(Eat);
            GameUIController.Combo("3");
            quality += 15;
            if (quality > 100)
            {
                quality = 100;
            }
            score += 10;
            MainController.sum--;
        }
        Destroy(collision.gameObject);
    }

    private void PlayAudio(AudioClip music)
    {
        GetComponent<AudioSource>().clip = music;
        GetComponent<AudioSource>().Play();
    }
}
