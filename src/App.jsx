import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routers/Router";
import { useAuthStore } from "./stores/auth.store";
import { baseURL } from "./configs/axios.config";
import { useEffect } from "react";
import { io } from "socket.io-client";
import { successMessage } from "./utils/toast";
import { useShallow } from "zustand/react/shallow";

function App() {
  const socket = io(baseURL);
  socket.connect();
  const { isAuthenticated, user, handleNotificationCount } = useAuthStore(
    useShallow((state) => state)
  );

  useEffect(() => {
    if (isAuthenticated && user) {
      socket.emit("join", user?.userData?._id);
      socket.on("reconnect", () => {
        if (isAuthenticated) {
          socket.emit("join", user?.userData?._id);
        }
      });
    }
    socket.on("notification", (notification) => {
      successMessage("Notification received!");
      handleNotificationCount();
      if (Notification.permission === "granted") {
        new Notification(notification?.title, {
          body: notification?.message,
        });
      } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            new Notification(notification?.title, {
              body: notification?.message,
            });
          }
        });
      }
      refetchNotificationCount();
    });

    return () => {
      socket.disconnect();
    };
  }, [isAuthenticated]);

  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages: "en,de", // include this for selected languages
        // layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      "google_translate_element"
    );
  };

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
