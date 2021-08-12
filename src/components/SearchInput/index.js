import Icon from "components/Icon";
import styles from "./styles.module.scss";
import IconType from "../Icon/IconType";
import IconTheme from "../Icon/IconTheme";

export default function SearchInput(props) {
    const {
        id,
        type,
        form,
        name,
        placeholder,
        value,
        onChange,
        max,
        min,
        maxLength,
        minLength,
        step,
        disabled,
    } = props;

    return (
        <div className={styles.input_cmp}>
            <input
                type={type}
                id={id}
                name={name}
                form={form}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                max={max}
                min={min}
                maxLength={maxLength}
                minLength={minLength}
                step={step}
                disabled={disabled}
            />
            <div className={styles.input_cmp___icon}>
                <Icon
                    iconType={IconType.searchSmall}
                    iconTheme={IconTheme.white}
                />
            </div>
        </div>
    );
}
