import { ReactNode } from "react";
import type { UserInterface } from "@typing/user";

export interface ChildrenProp {
  children: ReactNode;
}

export interface LabelProps {
  id: string;
  children: ReactNode;
}
export interface FormProps {
  user?: UserInterface | null;
  close?: () => void;
}

export interface UserCardProps {
  children: ReactNode | ReactNode[];
}

export interface ErrorLabelProps extends ChildrenProp {}

export interface UserLabelCardProps extends ChildrenProp {
  weight?: string | number;
}

export interface UserImageCardProps {
  src: string;
  id: number;
  name: string;
}
