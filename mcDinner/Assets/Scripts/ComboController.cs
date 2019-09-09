using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ComboController : MonoBehaviour
{
    public Text combo;

    private void Start()
    {
        Debug.Log(combo.color.a);
    }

    void Update()
    {
        if (combo)
        {
            combo.color = new Color(combo.color.r, combo.color.g, combo.color.b, combo.color.a - Time.deltaTime);
            //combo.transform.position = new Vector3(0,650 + Time.deltaTime,0);
            //Debug.Log(combo.transform.position.y);
        }
    }
}
