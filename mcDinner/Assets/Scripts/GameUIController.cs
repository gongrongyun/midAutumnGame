using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class GameUIController : MonoBehaviour
{
    public Canvas GameUI;
    public Text _combo;
    public Text quality;
    public static Text combo;
    public static Canvas gameUI;

    public static Stack<string> cakes = new Stack<string>();

    private void Start()
    {
        combo = _combo;
        gameUI = GameUI;
        GetComponentInChildren<Slider>().value = 20;
        quality.text = "" + Player.quality;
    }
    
    void Update()
    {
        GetComponentInChildren<Slider>().value = Player.quality;
        quality.text = "" + Player.quality;
        GetComponentInChildren<Text>().text = "" + Player.score;
    }

    public static void Combo(string num)
    {
        if (cakes.Count == 0)
            cakes.Push(num);
        else if (cakes.Peek() == num)
            cakes.Push(num);
        else
        {
            cakes.Clear();
            cakes.Push(num);
        }
        if (cakes.Count >= 3)
        {
            switch (cakes.Peek())
            {
                case "1":
                    Player.score += 5 * cakes.Count;
                    break;
                case "2":
                    Player.score += 20 * cakes.Count;
                    break;
                case "3":
                    Player.score += 10 * cakes.Count;
                    break;
                default:
                    break;
            }
            Text _Combo = Instantiate(combo, new Vector3(0, 650, 0), Quaternion.identity);
            _Combo.text = "x" + "  " + cakes.Count;
            _Combo.transform.SetParent(gameUI.transform, false);
            Destroy(_Combo, 3f);
        }
    }
}
