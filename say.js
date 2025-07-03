module.exports.config = {
  name: "قول",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "حمودي سان",
  description: "سنفور يقول ما تكتبه",
  commandCategory: "تسلية",
  usages: "[النص]",
  cooldowns: 2
};

module.exports.run = async function({ api, event, args }) {
  const message = args.join(" ");
  if (!message) return api.sendMessage("😅 اكتب شيئًا ليقوله سنفور!", event.threadID, event.messageID);
  return api.sendMessage(`🗣️ سنفور يقول: ${message}`, event.threadID, event.messageID);
};
