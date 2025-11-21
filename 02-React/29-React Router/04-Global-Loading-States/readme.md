

#### Applayout.jsx
```javascript
import Home from "../Home";
import Header from "../Header";
import Footer from "../Footer";
import Loading from "./Loading";
import { Outlet, useNavigation } from "react-router-dom";

const Applayout = () => {

    const navigation = useNavigation();

    if (navigation.state === "loading") {
        return <Loading/>;
    }

    return (
        <>

            <Header />

            <Outlet />

            <Footer />

        </>
    )
}

export default Applayout;
```

#### Loading Component
```bash

import "../../app.css";

export const Loading = () => {
  return (
    <div className="container loader-section">
      <div className="loader"></div>
    </div>
  );
};

export default Loading
```