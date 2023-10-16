import {
  ButtonItem,
  definePlugin,
  DialogButton,
  // Menu,
  // MenuItem,
  PanelSection,
  PanelSectionRow,
  // Router,
  ServerAPI,
  // showContextMenu,
  staticClasses,
  Focusable,
  Field,
} from "decky-frontend-lib";
import { VFC } from "react";
import { FaClipboardList, FaPen } from "react-icons/fa";

// interface AddMethodArgs {
//   left: number;
//   right: number;
// }

const Content: VFC<{ serverAPI: ServerAPI }> = ({}) => {
  // const [result, setResult] = useState<number | undefined>();

  // const onClick = async () => {
  //   const result = await serverAPI.callPluginMethod<AddMethodArgs, number>(
  //     "add",
  //     {
  //       left: 2,
  //       right: 2,
  //     }
  //   );
  //   if (result.success) {
  //     setResult(result.result);
  //   }
  // };

  const copyToClipboard = (a:String) => {
    console.log(a);
  }

  const editField = () => {
    console.log("editing string");
  }

  return (
    <PanelSection title="Panel Section">
      {/* <PanelSectionRow>
        <ButtonItem
          layout="below"
          onClick={(e) =>
            showContextMenu(
              <Menu label="Menu" cancelText="CAAAANCEL" onCancel={() => {}}>
                <MenuItem onSelected={() => {}}>лягушка</MenuItem>
                <MenuItem onSelected={() => {}}>хурма</MenuItem>
                <MenuItem onSelected={() => {}}>пока</MenuItem>
              </Menu>,
              e.currentTarget ?? window
            )
          }
        >
          Open menu
        </ButtonItem>
      </PanelSectionRow> */}

      <PanelSectionRow>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Field
            bottomSeparator="none"
            // icon={null}
            label={null}
            childrenLayout={undefined}
            inlineWrap="keep-inline"
            padding="none"
            spacingBetweenLabelAndChild="none"
            childrenContainerWidth="max"
          >
            <Focusable style={{display: "flex"}}>
              <DialogButton
                onClick={() => copyToClipboard("a")}
                onSecondaryButton={() => editField()}
              >
                Psswd
              </DialogButton>
              <ButtonItem>
                <FaPen />
              </ButtonItem>
            </Focusable>
          </Field>
        </div>
      </PanelSectionRow>

      {/* <PanelSectionRow>
        <ButtonItem
          layout="below"
          onClick={() => {
            Router.CloseSideMenus();
            Router.Navigate("/decky-plugin-test");
          }}
        >
          Save
        </ButtonItem>
      </PanelSectionRow> */}
    </PanelSection>
  );
};

/* const DeckyPluginRouterTest: VFC = () => {
  return (
    <div style={{ marginTop: "50px", color: "white" }}>
      Hello World!
      <DialogButton onClick={() => Router.NavigateToLibraryTab()}>
        Go to Library
      </DialogButton>
    </div>
  );
}; */

export default definePlugin((serverApi: ServerAPI) => {
  /* serverApi.routerHook.addRoute("/decky-plugin-test", DeckyPluginRouterTest, {
    exact: true,
  }); */

  return {
    title: <div className={staticClasses.Title}>Clipboard</div>,
    content: <Content serverAPI={serverApi} />,
    icon: <FaClipboardList />,
    onDismount() {
      // serverApi.routerHook.removeRoute("/decky-plugin-test");
    },
  };
});
