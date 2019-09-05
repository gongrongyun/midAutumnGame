using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Player : MonoBehaviour
{
    public Player player;
    public static int quality;
    public static int score;
    private Rigidbody2D rig;
    private float acceleration;
    private float horizontal;
    private float vertical;
    private float radius;

    // Start is called before the first frame update
    void Start()
    {
        acceleration = 1f;
        quality = 60;
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
        }
    }

    private void Move()
    {
        //horizontal = Input.acceleration.x;
        //vertical = Input.acceleration.y;
        horizontal = Input.GetAxisRaw("Horizontal");
        vertical = Input.GetAxisRaw("Vertical");
        rig.velocity = new Vector2(rig.velocity.x + horizontal * Time.fixedDeltaTime * acceleration,
            rig.velocity.y + vertical * Time.fixedDeltaTime * acceleration);
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
        if (rig.position.y + radius > MainController.screenHeight / 2)
        {
            rig.position = new Vector2(rig.position.x, MainController.screenHeight / 2 - radius);
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
            collision.gameObject.SetActive(false);
            Destroy(collision.gameObject, 1f);
            quality += 10;
            if (quality > 100)
            {
                quality = 100;
            }
            score += 10;
            MainController.sum--;
        }
        if (collision.gameObject.tag == "Bomb")
        {
            quality -= 50;
            if(quality <= 0)
                MainController.isGaming = false;
            Destroy(collision.gameObject, 1f);
            rig.velocity = new Vector2(0, 0);
        }
        if (collision.gameObject.tag == "MoonCake2")
        {
            Debug.Log("2");
            collision.gameObject.SetActive(false);
            Destroy(collision.gameObject, 1f);
            quality += 10;
            if (quality > 100)
            {
                quality = 100;
            }
            score += 10;
            MainController.sum--;
        }
        if (collision.gameObject.tag == "MoonCake3")
        {
            Debug.Log("3");
            collision.gameObject.SetActive(false);
            Destroy(collision.gameObject, 1f);
            quality += 10;
            if (quality > 100)
            {
                quality = 100;
            }
            score += 10;
            MainController.sum--;
        }
    }
}
