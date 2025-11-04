import moment from "moment";
import "moment/locale/id.js"; // opsional kalau mau bahasa Indonesia

// set default locale (bisa 'id' untuk Indonesia, atau 'en' untuk Inggris)
moment.locale("id");

export function formatDate(dateString: string, format = "DD MMM YYYY") {
  if (!dateString) return "";
  return moment(dateString).format(format);
}

export function isEventAvailable(date: string) {
  const now = moment();
  const eventDate = moment(date);

  return now.isSameOrBefore(eventDate, "day");
}