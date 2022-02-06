import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/store";
import {useLocation} from "react-router-dom";
import {ILocationParams} from "../interfaces/location.interface";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;
export const useAppLocation = <T>() => useLocation() as ILocationParams<T>