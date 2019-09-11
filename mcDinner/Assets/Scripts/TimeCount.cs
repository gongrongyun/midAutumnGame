using System.Collections;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class TimeCount:MonoBehaviour
{
    public GameObject text;
    public int TotalTime = 120;
    public static bool End = false;

    void Start()
    {

        StartCoroutine(CountDown());

    }

    IEnumerator CountDown()
    {
        while (TotalTime >= 0)
        {
            text.GetComponent<Text>().text = TotalTime.ToString();
            yield return new WaitForSeconds(1);
            TotalTime--;
            if (TotalTime == 0)
            {
                MainController.isGaming = false;
                End = true;
            }
        }
    }
}