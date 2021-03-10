import logo from './logo.svg';
import './App.css';
 
function App() {
  return (
    <div className="App">
      <div className="body">
     <header >
        <div className="top">
          <div className="vegetable"><h1 >Vegetable</h1></div>
          <div className="top_right">
            <img src="image\btn_facebook.png" alt="fb" class="fb" />
            <img src="image\btn_instagram.png" alt="ig" class="ig" />
            <div className="line1"></div>
            <div className="cc"></div>
            <div className="LOGIN">LOGIN</div>
            <div className="cc1"></div>
            <div className="JOIN">JOIN</div>
          </div>
        </div>
    </header>
    <nav>
        <ul className="ul">
            <li className="home">Home</li>
            <li className="aboutus">About Us</li>
            <li className="vegetable1">Vegetable</li>
            <li className="online">Online</li>
            <li className="contact">Contact</li>
        </ul>
    </nav>
        <img src="image\img_main_pumpkin.png" alt="pumpkin" class="pumpkin" />
        <article className="article">
          <div>
            <div className="bottom"></div>
            <div className="vegetable2" > Vegetable</div> 
              <div>
                  <img src="image\img_vegetables_pepper.png" alt="pepper" class="pepper" />
                  <img src="image\img_vegetables_carrot.png" alt="carrot" class="carrot" />
                  <img src="image\img_vegetables_corn.png" alt="corn" class="corn" />
              </div>
          </div>
          <div>
            <div className="bottom2"></div>
            <div className="contact2">Contact</div>
            <div >
              <div className="bottom3"></div>
              <p className="p1">For any questions or suggestions about Vegetables, Vegetables Club or your<br/> 
                      online order you can contact Vegetables Customer Service by phone, email<br/> 
                      or post and we’ll be happy to help.</p>
              <div className="line2"></div>
              <p className="p2">E-mail : Vegetables@aaabbccc.com<br/> 
                          PHONE : +886-123-456-789</p>
            </div>
          </div>
        </article>
        </div>
    </div>
    
  );
}
 
export default App;
 

