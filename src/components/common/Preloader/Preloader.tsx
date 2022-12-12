import {FC} from "react"
import s from './Preloader.module.css'
import 'materialize-css/dist/css/materialize.min.css'

interface PreloaderI {

}

const Preloader: FC<PreloaderI> = () => {
  return <div className={s.preloader}>
<div className="preloader-wrapper small active">
    <div className="spinner-layer spinner-green-only">
      <div className="circle-clipper left">
        <div className="circle"></div>
      </div><div className="gap-patch">
        <div className="circle"></div>
      </div><div className="circle-clipper right">
        <div className="circle"></div>
      </div>
    </div>
  </div>
  </div>
}

export default Preloader
