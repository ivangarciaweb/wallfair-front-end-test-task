import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import Icon from "../Icon";
import IconTheme from "../Icon/IconTheme";
import IconType from "../Icon/IconType";
import DefaultProfilePicture from "../../data/images/logo.png";
import SettingBackgroundOne from "../../data/images/setting-background-one.svg";
import SettingBackgroundOneGrey from "../../data/images/setting-background-one-grey.svg";
import SettingBackgroundTwo from "../../data/images/setting-background-two.svg";
import SettingBackgroundTwoGrey from "../../data/images/setting-background-two-grey.svg";
import SettingBackgroundThree from "../../data/images/setting-background-three.svg";
// import SettingBackgroundFour from "../../data/images/setting-background-four.svg";
import SettingBackgroundFourGrey from "../../data/images/setting-background-four-grey.svg";
import SettingBet from "../../data/images/setting-bet.png";
import SettingWallet from "../../data/images/setting-wallet.png";
import SettingPhone from "../../data/images/setting-phone.png";
import SettingMail from "../../data/images/setting-mail.png";
import SettingNotification from "../../data/images/setting-notifications.png";
import SettingSupport from "../../data/images/setting-support.png";
import Routes from "../../constants/Routes";
import { useHistory } from "react-router";

const HomeSettings = ({ notShowSettingsHandler }) => {
    const history = useHistory();

    const onClickGoToRoute = (destinationRoute) => {
        return () => {
            history.push(destinationRoute);
        };
    };

    return (
        <div className={styles.settings}>
            <div className={styles.headlineContainer}>
                <Icon
                    width={15}
                    iconType={IconType.arrowLeft}
                    iconTheme={IconTheme.white}
                    className={styles.headlineIcon}
                    onClick={notShowSettingsHandler}
                />
                <p className={styles.headlineText}>Settings</p>
            </div>
            <div className={styles.settingContainer}>
                <div
                    className={classNames(
                        styles.singleSettingHolder,
                        styles.settingDeactive
                    )}
                >
                    <img
                        src={SettingBackgroundOneGrey}
                        alt="profile_background"
                        className={styles.settingBackground}
                    />
                    <img
                        src={DefaultProfilePicture}
                        alt="profile_picture"
                        className={styles.profilePicture}
                    />
                    <p className={styles.settingTitle}>My Profile</p>
                    <Icon
                        width={15}
                        iconType={IconType.arrowRight}
                        className={styles.goIntoSettingIcon}
                    />
                </div>
                <div
                    className={classNames(
                        styles.singleSettingHolder,
                        styles.settingActive
                    )}
                    onClick={onClickGoToRoute(Routes.betOverview)}
                >
                    <img
                        src={SettingBackgroundTwo}
                        alt="bet_background"
                        className={styles.settingBackground}
                    />
                    <img
                        src={SettingBet}
                        alt="bets"
                        className={styles.settingIcon}
                        style={{ width: "30px" }}
                    />
                    <p className={styles.settingTitle}>My Bets</p>
                    <Icon
                        width={15}
                        iconType={IconType.arrowRight}
                        className={styles.goIntoSettingIcon}
                    />
                </div>
                <div
                    className={classNames(
                        styles.singleSettingHolder,
                        styles.settingActive
                    )}
                    onClick={onClickGoToRoute(Routes.wallet)}
                >
                    <img
                        src={SettingBackgroundThree}
                        alt="wallet_background"
                        className={styles.settingBackground}
                    />
                    <img
                        src={SettingWallet}
                        alt="wallet"
                        className={styles.settingIcon}
                        style={{ width: "20px", marginLeft: "5px" }}
                    />
                    <p className={styles.settingTitle}>My Wallet</p>
                    <Icon
                        width={15}
                        iconType={IconType.arrowRight}
                        className={styles.goIntoSettingIcon}
                    />
                </div>
                <div
                    className={classNames(
                        styles.singleSettingHolder,
                        styles.settingDeactive
                    )}
                >
                    <img
                        src={SettingBackgroundFourGrey}
                        alt="phone_background"
                        className={styles.settingBackground}
                    />
                    <img
                        src={SettingPhone}
                        alt="phone"
                        className={styles.settingIcon}
                        style={{ width: "16px", marginLeft: "7px" }}
                    />
                    <p className={styles.settingTitle}>Change Phone Number</p>
                    <Icon
                        width={15}
                        iconType={IconType.arrowRight}
                        className={styles.goIntoSettingIcon}
                    />
                </div>
                <div
                    className={classNames(
                        styles.singleSettingHolder,
                        styles.settingDeactive
                    )}
                >
                    <img
                        src={SettingBackgroundTwoGrey}
                        alt="mail_background"
                        className={styles.settingBackground}
                    />
                    <img
                        src={SettingMail}
                        alt="mail"
                        className={styles.settingIcon}
                        style={{ width: "22px", marginLeft: "4px" }}
                    />
                    <p className={styles.settingTitle}>Change E-Mail Address</p>
                    <Icon
                        width={15}
                        iconType={IconType.arrowRight}
                        className={styles.goIntoSettingIcon}
                    />
                </div>
                <div
                    className={classNames(
                        styles.singleSettingHolder,
                        styles.settingDeactive
                    )}
                >
                    <img
                        src={SettingBackgroundOneGrey}
                        alt="notifications_background"
                        className={styles.settingBackground}
                    />
                    <img
                        src={SettingNotification}
                        alt="notifications"
                        className={styles.settingIcon}
                        style={{ width: "22px", marginLeft: "4px" }}
                    />
                    <p className={styles.settingTitle}>SMS Notifications</p>
                    <Icon
                        width={15}
                        iconType={IconType.arrowRight}
                        className={styles.goIntoSettingIcon}
                    />
                </div>
                <div
                    className={classNames(
                        styles.singleSettingHolder,
                        styles.settingDeactive
                    )}
                >
                    <img
                        src={SettingBackgroundTwoGrey}
                        alt="support_background"
                        className={styles.settingBackground}
                    />
                    <img
                        src={SettingSupport}
                        alt="support"
                        className={styles.settingIcon}
                        style={{ width: "22px", marginLeft: "4px" }}
                    />
                    <p className={styles.settingTitle}>Support</p>
                    <Icon
                        width={15}
                        iconType={IconType.arrowRight}
                        className={styles.goIntoSettingIcon}
                    />
                </div>
            </div>
        </div>
    );
};

export default HomeSettings;
