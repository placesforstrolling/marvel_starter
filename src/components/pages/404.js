import ErrorMessage from "../errorMessage/ErrorMessage";
import {Link} from "react-router-dom";

import './404.scss'

const Page404 = () => {
    return (
        <div>
            <ErrorMessage/>
            
            <div className="box">
        <div className="box__ghost">
          <div className="symbol" />
          <div className="symbol" />
          <div className="symbol" />
          <div className="symbol" />
          <div className="symbol" />
          <div className="symbol" />
          <div className="box__ghost-container">
            <div className="box__ghost-eyes">
              <div className="box__eye-left" />
              <div className="box__eye-right" />
            </div>
            <div className="box__ghost-bottom">
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
          <div className="box__ghost-shadow" />
        </div>
        <div className="box__description">
          <div className="box__description-container">
            <div className="box__description-title">Whoops!</div>
            <div className="box__description-text">It seems like we couldn't find the page you were looking for</div>
          </div>
          <Link to="/" target="_blank" className="box__button">Go Home</Link>
        </div>
      </div>
        </div>
    )
}

export default Page404;