using UnityEngine;
using UnityEngine.Video;
using UnityEngine.SceneManagement;

public class OpenManager : MonoBehaviour
{
    private VideoPlayer videoPlayer;
    // Start is called before the first frame update
    void Start()
    {
        videoPlayer = gameObject.GetComponent<VideoPlayer>();
        videoPlayer.loopPointReached += LoadNextScene;
    }

    // Update is called once per frame
    void LoadNextScene(VideoPlayer vp)
    {
        SceneManager.LoadScene(1);
    }
}
