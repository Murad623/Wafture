import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectAccout } from "../store/accountSlice";
import GSV1 from '../images/game-simple-view.png';
import GSV3 from '../images/game-simple-view-3.png';
import newesten from "../images/newesten.png"
import Newesten from "../games/New_Westen.apk";
import WCA from "../games/Warped_City_Assets.zip"
import Cainos from "../games/Cainos.zip"
import "./Home.css"
const Home = () =>{
    return(
        <div className="Home">
            <div className="gameContainer">
                <div className="gameImg">
                    <img className="gImg" src={GSV1} alt="ss" />
                </div>
                <div className="cAndL">
                    <div className="content">
                        <h1 className="text">Warped City Assets</h1>
                        <p className="text">
                            3 Layer Parallax Background -A complete Tileset at 16x16 pixels Tiles to build your levels.<br />
                            Lots of Different Props/Items/fx to decorate the scene.<br />
                            10 Different animations for your main character walk, shoot, run-shoot, run, jump, idle, hurt, crouch, climb and back-jump.<br />
                            2 different animated enemies.<br />
                            4 different vehicles.
                        </p>
                    </div>
                    <div className="hrefs">
                        <a className="link" href="https://assetstore.unity.com/packages/2d/environments/warped-city-assets-pack-138128#description">Go Asset Store</a>
                        <a className="link" href={WCA} download="Warped_City_Assets.zip">Download</a>
                    </div>
                </div>
            </div>
            <div className="gameContainer">
                <div className="gameImg">
                    <img className="gImg" src={GSV3} alt="ss3" />
                </div>
                <div className="cAndL">
                    <div className="content">
                        <h1 className="text">Pixel Art Platformer - Village</h1>
                        <p className="text">
                            Description : <br />
                            32x32 village prop sprites for platformer games.<br />
                            INCLUDES : <br />
                            124 village props in total.<br />
                            29 pants, bushes and grasses.<br />
                            3 rocks.<br />
                            1 grass ground tileset.<br />
                            2 trees.<br />
                            4 different chests with open and close animations.<br />
                        </p>
                    </div>
                    <div className="hrefs">
                        <div className="storeLinks">
                            <a className="link" href="https://assetstore.unity.com/packages/2d/environments/pixel-art-platformer-village-props-166114">Go for Cainos package</a>
                            <a className="link" href="https://assetstore.unity.com/packages/2d/environments/pixel-skies-demo-background-pack-226622">Go for sky package</a>
                            <a className="link" href="https://assetstore.unity.com/packages/2d/characters/bandits-pixel-art-104130">Go for character package</a>
                        </div>
                        <a className="link" href={Cainos} download="Cainos.zip">Download</a>
                    </div>
                </div>
            </div>
            <div className="gameContainer">
                <div className="gameImg">
                    <img className="gImg" src={newesten} alt="ss3" />
                </div>
                <div className="cAndL">
                    <div className="content">
                        <h1 className="text">New Westen</h1>
                        <p className="text">
                            Endless runner game.<br />
                            Play with the cowboy. He has a gun and you can blow up the boxes. The boxes may contain a coin or 3 bullets, or they may be empty. However, if you want to explode cacti, you must collect enough money and buy this ability.<br />
                            We have 4 abilities, slow down and speed up for 5 coins, immortality for 10 coins, power up for 20 coins.<br />
                            Developed for Android platforms
                        </p>
                    </div>
                    <div className="hrefs">
                        <a className="link" href={Newesten} download="Newesten.apk">Download</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home