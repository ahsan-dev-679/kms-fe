import moment from "moment";
import {
  IconArrowsDown,
  IconArrowsUp,
  IconArrowUp,
  IconArrowDown,
} from "@tabler/icons-react";

export const topStandingsColors = (index) => {
  let border, bg;

  switch (index) {
    case 0:
      border = "#73ee11";
      bg = "#d6febd";
      break;

    case 1:
      border = "#1f1bed";
      bg = "#dadeff";
      break;

    case 2:
      border = "#edac18";
      bg = "#fcf1d0";
      break;

    default:
      border = "#e4edff";
      bg = "";
      break;
  }

  return { border, bg };
};
export const getStatusColor = (status) => {
  const statusColors = {
    completed: "#a5d6a7", // Pale Green
    pending: "#ffb74d", // Pale Orange
    shipped: "#64b5f6", // Pale Blue
    cancelled: "#ef9a9a", // Pale Red
    returned: "#bdbdbd", // Light Gray
  };

  return statusColors[status.toLowerCase()] || "#000000";
};
export const formatDate = (date) => {
  return moment(date).format("YYYY-MM-DD");
};
export function formatDateTime(inputDate) {
  return moment(inputDate).format("Do MMM, YYYY [at] h:mm A");
}
export const formatPrice = (price) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
  });

  const formattedPrice = formatter.format(price);

  return formattedPrice.replace("€", "").trim() + " €";
};

export const getStockIcon = (stock) => {
  if (stock < 10) {
    return { Icon: IconArrowDown, color: "red" };
  }
  return { Icon: IconArrowUp, color: "green" };
};
export const capitalizeFirstLetter = (string) => {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};
