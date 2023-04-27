import { useDispatch, useSelector } from "react-redux";
import { Buttons, NewsViewer, PopupButton, Wrapper } from "./styled";
import { ToggleButton } from "./ToggleButton";
import { setViewMode } from "../NewsViewerSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const isListView = useSelector((state) => state.viewMode.isListView);

  const handleViewModeChange = () => {
    const newViewMode = isListView
      ? { isListView: false }
      : { isListView: true };
    dispatch(setViewMode(newViewMode));
  };

  return (
    <Wrapper>
      <NewsViewer>News Viewer</NewsViewer>
      <Buttons>
        <ToggleButton
          label={isListView ? "Tiles" : "List"}
          onClick={handleViewModeChange}
          isActive={!isListView}
        />
        <PopupButton>Popup</PopupButton>
      </Buttons>
    </Wrapper>
  );
};
