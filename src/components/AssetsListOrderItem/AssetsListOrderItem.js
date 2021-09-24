import { useState } from "react";
import { Box, Divider, Stack, Typography, Collapse, SvgIcon, Tooltip } from "@mui/material";
import { useSelector } from "react-redux";
import cls from "classnames";

import SvgWTon from "../../images/tokens/tonNew.svg";
import SvgWEth from "../../images/tokens/wETH.svg";
import SvgUsdt from "../../images/tokens/wUSDT.svg";
import SvgWBtc from "../../images/tokens/wBTC.svg";
import SvgCross from "!@svgr/webpack!../../images/icons/crossNew.svg";
import SvgCopy from "!@svgr/webpack!../../images/icons/copyNew.svg";

import classes from "./AssetsListOrderItem.module.scss";

const SYMBOL_ICON_MAP = {
	"WTON": SvgWTon,
	"WETH": SvgWEth,
	"USDT": SvgUsdt,
	"WBTC": SvgWBtc,
};


export default function AssetsListOrderItem({
	orderAsset,
}) {
	const {
		addrPair,
		addrOwner,
		amount,
		price,
	} = orderAsset;

	const pairList = useSelector(state => state.walletReducer.pairsList);
	const pair = pairList.find(pairItem => pairItem.pairAddress === addrPair);

	const {
		symbolA,
		symbolB,
	} = pair;

	const iconA = SYMBOL_ICON_MAP[symbolA];
	const iconB = SYMBOL_ICON_MAP[symbolB];

	const appTheme = useSelector(state => state.appReducer.appTheme);

	const [open, setOpen] = useState(false);

	const CrossIcon = (props) =>
		<SvgIcon component={SvgCross} viewBox="0 0 12 12" {...props} />;

	const CopyIcon = (props) =>
		<SvgIcon component={SvgCopy} viewBox="0 0 14 14" {...props} />;

	const clientData = useSelector(state => state.walletReducer.clientData);

	const ownOrder = clientData.address === addrOwner;

	return (
		<>
			<Box
				className={cls(
					classes.wrapper,
					classes.wrapper_resetButton,
					open && classes.wrapper_notClickable,
				)}
				component="button"
				onClick={() => setOpen(true)}
			>
				<Stack
					direction="row"
					className={classes.container}
				>
					<Box>
						<img src={iconA} alt={symbolA} className={cls(classes.icon, classes.icon_first)} />
						<img src={iconB} alt={symbolB} className={classes.icon} />
					</Box>
					<Box className={classes.content}>
						<Typography
							className={cls(
								classes.font_large,
								classes.text_bold,
								appTheme === "light"
									? classes.textColor_light
									: classes.textColor_dark
							)}
							component="h2"
						>
							{symbolA} - {symbolB}
						</Typography>
						<Typography className={classes.content__subheader}>Limit order</Typography>
					</Box>
					<Typography
						className={cls(
							classes.amount,
							classes.font_small,
							classes.text_bold,
							appTheme === "light"
								? classes.textColor_light
								: classes.textColor_dark
						)}
					>
						{amount} {symbolA}
					</Typography>
				</Stack>
				<Collapse in={open}>
					<Stack
						direction="row"
						className={cls(classes.container, classes.container_second)}
					>
						<Stack 
							direction="flow" 
							alignItems="flex-start" 
							sx={{ visibility: ownOrder ? "visible" : "hidden" }}
						>
							<Tooltip title="Delete order">
								<button className={cls(classes.btn, classes.btn_first)}>
									<CrossIcon
										className={cls(classes.icon_close, classes.icon_white)}
									/>
								</button>
							</Tooltip>
							<Tooltip title="Update order">
								<button className={classes.btn} color="primary">
									<CopyIcon
										className={cls(classes.icon_copy, classes.icon_white)}
									/>
								</button>
							</Tooltip>
						</Stack>
						<Box className={classes.content}>
							<Typography
								className={cls(
									classes.font_medium,
									classes.text_bold,
									appTheme === "light"
										? classes.textColor_light
										: classes.textColor_dark
								)}
							>
								{price} {symbolA}
							</Typography>
							<Typography
								className={classes.content__subheader}
								component="h3"
							>Price</Typography>
						</Box>
						<Typography
							className={cls(
								classes.amount,
								classes.font_medium,
								classes.text_bold,
								appTheme === "light"
									? classes.textColor_light
									: classes.textColor_dark
							)}
						>
							{amount * price} {symbolB}
						</Typography>
					</Stack>
				</Collapse>
			</Box>
			<Divider />
		</>
	)
}