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
        }
    }
}
