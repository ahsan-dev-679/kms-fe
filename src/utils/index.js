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
