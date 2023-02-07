import { findArchiveById_zhihu } from "../archives/zhihu/getArchive_zhihu";
import { showArchive } from "./show";

function search() {
  var searchKeyword = document.getElementById("searchKeyword").value;
  var archiveId = findArchiveId(searchKeyword);
  if (archiveId == 404) {
    location.replace("../404.htm");
  }

  var getedArchive = findArchiveById_zhihu(archiveId);
  showArchive(getedArchive);
}

function findArchiveId(keyword) {
  var find = keyword;
  var id;

  if (find == "侧妃正传") {
    id = 1;
  } else if (find == "忌日堡垒") {
    id = 2;
  } else if (find == "不再一切") {
    id = 3;
  } else if (find == "飘渺除夕") {
    id = 4;
  } else if (find == "作死不愿醒悟") {
    id = 5;
  } else if (find == "明珠斗茶") {
    id = 6;
  } else if (find == "鲜嫩气运") {
    id = 7;
  } else {
    id = 404;
  }

  return id;
}
