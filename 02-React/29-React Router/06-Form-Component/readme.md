

#### App.jsx
```bash
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Component/Home";
import Movie from "./Component/Movie";
import Contact, { contactData } from "./Component/Contact";
import Applayout from "./Component/layout/Applayout";
import { getMoviesData } from "./Component/api/GetApiData";

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Applayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/movie',
          element: <Movie />,
          loader: getMoviesData
        },
        {
          path: '/contact',
          element: <Contact />,
          action: contactData,
        }
      ]
    },
  ]);

  return <RouterProvider router={router} />
}

export default App
```

#### Contact.jsx
```bash
import { Form } from "react-router-dom";
import '../app.css'


export const contactData = async ({ request }) => {
    try {
        const res = await request.formData();
        const data = Object.fromEntries(res);
        console.log(data);
        return null;
    } catch (error) {
        console.log(error.message);
    }
};


function Contact() {

    return (
        <>
            <section className="container ">
                <h2 className="section-common--heading">contact us</h2>
                <p className="section-common--subheading">
                    Get in touch with us. We are always here to help you.
                </p>

                <div className="section-contact">
                    <div className=" grid grid-two--cols">
                        <div className="contact-content">
                            <Form method="POST" action="/contact">
                                <div className="grid grid-two-cols mb-3">
                                    <div>
                                        <label htmlFor="username">full name</label>
                                        <input
                                            type="text"
                                            name="username"
                                            id="username"
                                            required
                                            autoComplete="off"
                                            placeholder="enter full name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email">email address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            required
                                            autoComplete="off"
                                            placeholder="abc@thapa.com"
                                        />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="message">message</label>
                                    <textarea
                                        name="message"
                                        id="message "
                                        cols="30"
                                        rows="10"
                                        placeholder="we are always here to help you."
                                    ></textarea>
                                </div>

                                <div className="mt-3">
                                    <button type="submit" className="btn contact-btn">
                                        send message
                                    </button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact;
```