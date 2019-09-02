using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class GameUIController : MonoBehaviour
{
    private void Start()
    {
        GetComponentInChildren<Slider>().value = 60;
    }
    
    void Update()
    {
        GetComponentInChildren<Slider>().value = Player.quality;
        GetComponentInChildren<Text>().text = "" + Player.score;
    }
}
