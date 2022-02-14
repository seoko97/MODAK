import { campAPI } from "@src/apis";
import { createActionByProps } from "@src/lib/createActionHandler";

const getCamp = createActionByProps("camp/getCamp", campAPI.getCamp);
const bookmark = createActionByProps("camp/bookmark", campAPI.bookmarkCamp);
const unbookmark = createActionByProps("camp/unbookmark", campAPI.unBookmarkCamp);

export { getCamp, bookmark, unbookmark };
