using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
public class ComboController : MonoBehaviour 
{
    private static float tempTime;
     void Start()
    {
        Debug.Log("?");
        tempTime = 0;
        if (tempTime < 1)
        {
            tempTime = tempTime + Time.deltaTime;
        }
        if (gameObject.GetComponent<Renderer>().sharedMaterial.color.a <= 1)
        {
            gameObject.GetComponent<Renderer>().sharedMaterial.color = new Color
            (
                gameObject.GetComponent<Renderer>().sharedMaterial.color.r,
                gameObject.GetComponent<Renderer>().sharedMaterial.color.g,
                gameObject.GetComponent<Renderer>().sharedMaterial.color.b,
                gameObject.GetComponent<Renderer>().sharedMaterial.color.a - tempTime / 2 * Time.deltaTime
            );
        }
        Destroy(gameObject,2.0f);
    }  
}
