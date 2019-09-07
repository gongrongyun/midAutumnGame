using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class GameMenuUI : MonoBehaviour
{
    public Text Score;
    void Update()
    {
        Record.LoadScore();
        if (Record.score >= 0)
        {
            Score.fontSize = 200;
            Score.text = "" + Record.score;
        } else
        {
            Score.fontSize = 80;
            Score.text = "暂时还没有记录哦";
        }
    }
}
