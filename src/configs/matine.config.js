import {
  createTheme,
  InputBase,
  NavLink,
  NumberInput,
  PasswordInput,
  Select,
  TextInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";

export const globalInputStyle = {
  defaultProps: {
    variant: "filled",
    styles: {
      label: {
        color: "#000",
      },
      input: {
        backgroundColor: "#F6F6F6",
        border: "1px solid #F6F5F5",
        // fontFamily: outfit.style.fontFamily,
        // fontSize: "16px",
        borderRadius: "10px",
      },
      wrapper: {
        marginTop: "0",
      },
      description: {
        display: "inline",
        marginLeft: "10px",
      },
    },
  },
};
const globalSelectStyle = {
  defaultProps: {
    variant: "filled",
    styles: {
      label: {
        color: "#141B43",
      },
      input: {
        backgroundColor: "#F6F6F6",
        border: "1px solid #F6F5F5",
        // fontFamily: outfit.style.fontFamily,
        fontSize: "16px",
        height: "45px",
        borderRadius: "4px",
      },
      wrapper: {
        marginTop: "0",
      },
      description: {
        display: "inline",
        marginLeft: "10px",
      },
    },
  },
};
const globalNavLinkStyle = {
  defaultProps: {
    variant: "subtle",
    color: "teal",
    styles: {
      label: {
        color: "#909FAF",
        fontSize: "15px",
        // fontFamily: outfit.style.fontFamily,
      },
    },
  },
};
export const theme = createTheme({
  components: {
    TextInput: TextInput?.extend(globalInputStyle),
    PasswordInput: TextInput?.extend(globalInputStyle),
    InputBase: InputBase?.extend(globalInputStyle),
    NumberInput: NumberInput?.extend(globalInputStyle),
    DateInput: DateInput?.extend(globalInputStyle),
    PasswordInput: PasswordInput?.extend(globalInputStyle),
    NavLink: NavLink?.extend(globalNavLinkStyle),
    Select: Select?.extend(globalSelectStyle),
  },
  //   headings: outfit,
  //   fontFamily: outfit.style.fontFamily,
});
