import propTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import ToastMessageAddToCart from "../components/toastMessages/toastMessageAddToCart";
import ToastMessageRemoveGroupFromCart from "../components/toastMessages/toastMessageRemoveGroupFromCart";

import "react-toastify/dist/ReactToastify.css";

const LocalStorageContext = createContext(null);

LocalStorageContextProvider.propTypes = {
  storageKey: propTypes.string,
  children: propTypes.node,
};

export default function LocalStorageContextProvider({ storageKey, children }) {
  const [localStorageItems, setLocalStorageItems] = useState([]);

  if (storageKey == null) {
    throw new Error(
      "LocalStorageContextProvider cannot be used without storage id."
    );
  }

  useEffect(() => {
    const storageItems = localStorage.getItem(storageKey);
    const value = storageItems != null ? JSON.parse(storageItems) : [];

    localStorage.setItem(storageKey, JSON.stringify(value));
    setLocalStorageItems(value);
  }, [storageKey]);

  return (
    <LocalStorageContext.Provider
      value={{
        storageKey,
        localStorageItems,
        showToastMessageAddToCart: (product) => {
          toast.success(<ToastMessageAddToCart {...product} />);
        },
        showToastMessageRemoveGroupFromCart: (product) => {
          toast.error(<ToastMessageRemoveGroupFromCart {...product} />);
        },
        setLocalStorageItems: (product) => {
          try {
            localStorage.setItem(
              storageKey,
              JSON.stringify([
                ...(localStorage.getItem(storageKey) != null
                  ? JSON.parse(localStorage.getItem(storageKey))
                  : []),
                product,
              ])
            );

            setLocalStorageItems((prev) => [...prev, product]);
          } catch (e) {
            throw new Error(
              `Error while parsing localStorage key (${storageKey})`
            );
          }
        },
        removeLocalStorageItem: (id) => {
          const storageItems = localStorage.getItem(storageKey);
          const parsedItems =
            storageItems != null ? JSON.parse(storageItems) : [];
          const lastIndexOfItem = parsedItems.findLastIndex((o) => o.id === id);

          localStorage.setItem(
            storageKey,
            JSON.stringify([
              ...parsedItems.filter((_, idx) => idx !== lastIndexOfItem),
            ])
          );

          setLocalStorageItems((prev) =>
            prev.filter((_, idx) => idx !== lastIndexOfItem)
          );
        },
        removeLocalStorageItems: (product) => {
          const storageItems = localStorage.getItem(storageKey);
          const parsedItems =
            storageItems != null ? JSON.parse(storageItems) : [];

          localStorage.setItem(
            storageKey,
            JSON.stringify([
              ...parsedItems.filter((item) => item.id !== product.id),
            ])
          );

          setLocalStorageItems((prev) =>
            prev.filter((item) => item.id !== product.id)
          );
        },
        clearLocalStorageItems: () => {
          localStorage.setItem(storageKey, JSON.stringify([]));

          setLocalStorageItems([]);
        },
      }}
    >
      {children}
    </LocalStorageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLocalStorageContext() {
  const context = useContext(LocalStorageContext);
  if (!context) {
    throw new Error(
      "LocalStorageContext should be used within LocalStorageContextProvider"
    );
  }
  const {
    clearLocalStorageItems,
    removeLocalStorageItem,
    removeLocalStorageItems,
    localStorageItems,
    setLocalStorageItems,
    showToastMessageAddToCart,
    showToastMessageRemoveGroupFromCart,
  } = context;

  return {
    cartItems: localStorageItems ?? [],
    setCartItems: (product, showToast) => {
      if (showToast == undefined) showToast = true;
      setLocalStorageItems(product);
      if (showToast) showToastMessageAddToCart(product);
    },
    removeFromCart: (product, showToast) => {
      if (showToast == undefined) showToast = true;
      removeLocalStorageItem(product.id);
      if (showToast) showToastMessageRemoveGroupFromCart(product);
    },
    removeGroupFromCart: (product, showToast) => {
      if (showToast == undefined) showToast = true;
      removeLocalStorageItems(product);
      if (showToast) showToastMessageRemoveGroupFromCart(product);
    },
    clearCart: clearLocalStorageItems,
  };
}
