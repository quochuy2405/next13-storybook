"use client";
import { ConfigProvider } from "antd";
import React, { ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "redux/store";
interface AppProviderProps {
	children: ReactElement | ReactNode;
}
const configThemes = {
	token: {
		colorPrimary: "#10b981",
		borderRadius: 2,
	},
	components: {
		Button: {
			colorPrimary: "#00b96b",
			algorithm: false, // Enable algorithm
		},
		Input: {
			colorPrimary: "#eb2f96",
			algorithm: false, // Enable algorithm
		},
	},
};
const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
	return (
		<Provider store={store}>
			<ConfigProvider theme={configThemes}> {children}</ConfigProvider>
		</Provider>
	);
};

export default AppProvider;
