import SimpleImageSlider from "react-simple-image-slider";
import React,{Component} from 'react'
export class Header extends Component{
    render() {
        const images = [
            { url: "https://lh3.googleusercontent.com/proxy/u0fpTRMWfr8RjGcYEVWFaH6b2WXi8Prp2rlGA88aUM0fXS4UYseZy9WsHMW5CzwU15jmWEaTJLb7DIv8wxeMvlyfYXqhukf1hPPsgJqTJaOVV-kA6oqn6DcSV_iE0Q" },
            { url: "https://www.unisr.it/mediaObject/unisr/news/media/IMG-NEWS-Global-health-Series-sett-2019/resolutions/res-l992x10000/IMG-NEWS-Global-health-Series-sett-2019.jpg" },
          
        ];

        return (
            <div>
                <SimpleImageSlider
                    width={1380}
                    height={300}
                    images={images}
                />
            </div>
        );
    }
}