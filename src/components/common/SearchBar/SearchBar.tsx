import styles from "@/components/common/SearchBar/SearchBar.module.css";

interface ISearchBarProps {
  padding?: string;
  width?: string;
  bgColor?: string;
  fontSize?: string;
}

export const SearchBar = ({
  padding,
  width,
  bgColor,
  fontSize,
}: ISearchBarProps) => {
  const inputStyles = {
    padding: padding ? padding : "",
    width: width ? width : "",
    backgroundColor: bgColor ? bgColor : "",
    fontSize: fontSize ? fontSize : "",
  };

  return (
    <input
      className={styles.input}
      style={inputStyles}
      type="text"
      placeholder="Search"
    />
  );
};
