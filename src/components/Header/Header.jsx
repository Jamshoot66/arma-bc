import React from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import actions from "store/actions";
import types from "types";
import { Caption, Wrapper, Settings, Bar } from "./Header-ui";

function Header() {
  const dispatch = useDispatch();
  const weapon = useSelector((store) => store.settings.weapon, shallowEqual);
  const header = weapon || "Выбирете вооружение в настройках";
  return (
    <Wrapper>
      <Bar>
        <Caption>{header}</Caption>
        <Settings
          onClick={() =>
            dispatch(
              actions.openModal({
                modal: {
                  title: types.modal.MODAL_SETTINGS.title,
                  component: types.modal.MODAL_SETTINGS.type,
                },
              }),
            )
          }
        />
      </Bar>
    </Wrapper>
  );
}

export default Header;
