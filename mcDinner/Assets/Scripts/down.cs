using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
public class down : MonoBehaviour
{
    public GameObject text;

    public void show()
    {
        text.SetActive(true);
    }

    public void hide()
    {
        text.SetActive(false);
    }
}



   

