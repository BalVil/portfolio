import { useTranslation } from "react-i18next";
import Select from "react-select";

const lngs = {
  en: { nativeName: "English" },
  ua: { nativeName: "Українська" },
};

const options = Object.keys(lngs).map((lng) => {
  return { label: lngs[lng].nativeName, value: lng };
});

const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  //   const [selected, setSelected] = useState(null);

  const handleChange = ({ value }) => {
    i18n.changeLanguage(value);
    // setSelected(selectedOption);
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
      //   onChange={(e) => i18n.changeLanguage(e.target.value)}
      options={options}
      styles={customStyles}
      defaultValue={options}
    />

    // <div className="language-switch" aria-labelledby="language-switch">
    //   {Object.keys(lngs).map((lng) => (
    //     <button
    //       className={`${lng === "en" ? "left" : "right"} `}
    //       key={lng}
    //       style={{
    //         fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
    //       }}
    //       type="submit"
    //       onClick={() => i18n.changeLanguage(lng)}
    //     >
    //       {lngs[lng].nativeName}
    //     </button>
    //   ))}
    // </div>
  );
};

export default LanguageSwitch;
