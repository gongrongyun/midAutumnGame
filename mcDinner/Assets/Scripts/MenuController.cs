using UnityEngine;

public class MenuController : MonoBehaviour
{
    public MainController mainController;
    private Canvas canvas;
    // Start is called before the first frame update
    public void startGame()
    {
        mainController.StartGame();
    }

    public void Menu()
    {
        Debug.Log("menu");
    }

    public void Exit()
    {
        Application.Quit();
    }
    
}
