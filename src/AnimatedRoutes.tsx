import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import "./assets/fonts/Ubuntu-Regular.ttf"
import "./assets/fonts/Ubuntu-Bold.ttf"
import { AnimatePresence } from 'framer-motion';
import Window from './screens/Window'
import TitleMenuScreen from './screens/TitleMenuScreen';
import GalleryScreen from './screens/GalleryScreen';
import ConfigScreen from './screens/ConfigScreen';
import LoadScreen from "./screens/LoadScreen";
import DisclaimerScreen from "./screens/DisclaimerScreen";
import { Slide, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './styles/App.scss'
import EndingsScreen from "./screens/EndingsScreen";
import FlowchartScreen from "./screens/FlowchartScreen";
import AppLayout from "./layouts/AppLayout";


const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AppLayout>
      <ToastContainer
        transition={Slide}
        position="bottom-right"
        theme="dark" />
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/*" element={<Navigate to={"/disclaimer"} />} />
          <Route path="/disclaimer" element={<DisclaimerScreen />} />
          <Route path="/title" element={<TitleMenuScreen />} />
          <Route path="/window" element={<Window />} />
          <Route path="/load" element={<LoadScreen />} />
          <Route path="/config" element={<ConfigScreen />} />
          <Route path="/extra/gallery" element={<GalleryScreen />} />
          <Route path="/extra/endings" element={<EndingsScreen />} />
          <Route path="/extra/scenes" element={<FlowchartScreen />} />
        </Routes>
      </AnimatePresence>
    </AppLayout>
  )
}

export default AnimatedRoutes