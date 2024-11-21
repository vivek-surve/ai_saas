"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

export const CrispChat = () => {
	useEffect(() => {
		Crisp.configure("ce42c9df-6f8a-4430-a6de-ca25fe0d1793");
	}, []);

	return null;
};
