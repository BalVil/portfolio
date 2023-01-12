import { useTranslation } from "react-i18next";
import Select from "react-select";

const lngs = {
  en: { nativeName: "English" },
  uk: { nativeName: "Українська" },
};

const options = Object.keys(lngs).map((lng) => {
  return { label: lngs[lng].nativeName, value: lng };
});

const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  const handleChange = ({ value }) => {
    i18n.changeLanguage(value);
  };

  const customStyles = {
    option: (defaultStyles, { isSelected }) => ({
      ...defaultStyles,
      padding: "0.1rem",
      color: isSelected ? "var(--color-primary)" : "var(--color-bg)",
      backgroundColor: isSelected ? "var(--color-white)" : undefined,
      cursor: "pointer",
    }),

    control: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: "transparent",
      padding: "1rem",
      border: "none",
      boxShadow: "none",
      cursor: "pointer",
    }),
    singleValue: (defaultStyles) => ({
      ...defaultStyles,
      color: "var(--color-primary)",
    }),
  };

  return (
    <Select
      className="language-switch"
      onChange={handleChange}
      options={options}
      styles={customStyles}
      defaultValue={options}
    />
  );
};

export default LanguageSwitch;
