import * as m from "mithril";

export default class ProfilesList implements m.Component {
  deleteProfile(profileName: string) {
    localStorage.removeItem(profileName);
    m.redraw();
  }

  view() {
    const profileNames = Object.keys(localStorage);
    return m("div", profileNames.map(name => {
      return m(".box.profile", [
        m(".content", [
          m("p.title.is-5", name),
          m("div", [
            m("a.button.is-primary", { href: `#!/profile/${name}` }, "View"),
            m("button.button.is-danger.is-light.ml-2", { onclick: () => this.deleteProfile(name) }, "Delete")
          ])
        ])
      ]);
    }));
  }
}