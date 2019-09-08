using System.Collections;
using System.Collections.Generic;
using UnityEngine;



public class ComboController : MonoBehaviour
{


    private float tempTime;
    void Start()
    {
        tempTime = 0;


        this.GetComponent<Renderer>().material.color = new Color
        (
                this.GetComponent<Renderer>().material.color.r,
                this.GetComponent<Renderer>().material.color.g,
                this.GetComponent<Renderer>().material.color.b, 
                this.GetComponent<Renderer>().material.color.a
        );
    }
    void Update()
    {
        if (tempTime < 1)
        {
            tempTime = tempTime + Time.deltaTime;
        }
        if (this.GetComponent<Renderer>().material.color.a <= 1)
        {
            this.GetComponent<Renderer>().material.color = new Color
            (
                this.GetComponent<Renderer>().material.color.r,
                this.GetComponent<Renderer>().material.color.g,
                this.GetComponent<Renderer>().material.color.b,
                gameObject.GetComponent<Renderer>().material.color.a - tempTime / 2 * Time.deltaTime
            );
        }
        Destroy(this.gameObject, 2.0f);//40秒后消除
    }
}
