const emojis = [
  '😄',
  '😃',
  '😀',
  '😊',
  '☺',
  '😉',
  '😍',
  '😘',
  '😚',
  '😗',
  '😙',
  '😜',
  '😝',
  '😛',
  '😳',
  '😁',
  '😔',
  '😌',
  '😒',
  '😞',
  '😣',
  '😢',
  '😂',
  '😭',
  '😪',
  '😥',
  '😰',
  '😅',
  '😓',
  '😩',
  '😫',
  '😨',
  '😱',
  '😠',
  '😡',
  '😤',
  '😖',
  '😆',
  '😋',
  '😷',
  '😎',
  '😴',
  '😵',
  '😲',
  '😟',
  '😦',
  '😧',
  '😈',
  '👿',
  '😮',
  '😬',
  '😐',
  '😕',
  '😯',
  '😶',
  '😇',
  '😏',
  '😑',
  '👲',
  '👳',
  '👮',
  '👷',
  '💂',
  '👶',
  '👦',
  '👧',
  '👨',
  '👩',
  '👴',
  '👵',
  '👱',
  '👼',
  '👸',
  '😺',
  '😸',
  '😻',
  '😽',
  '😼',
  '🙀',
  '😿',
  '😹',
  '😾',
  '👹',
  '👺',
  '🙈',
  '🙉',
  '🙊',
  '💀',
  '👽',
  '💩',
  '🔥',
  '✨',
  '🌟',
  '💫',
  '💥',
  '💢',
  '💦',
  '💧',
  '💤',
  '💨',
  '👂',
  '👀',
  '👃',
  '👅',
  '👄',
  '👍',
  '👎',
  '👌',
  '👊',
  '✊',
  '✌',
  '👋',
  '✋',
  '👐',
  '👆',
  '👇',
  '👉',
  '👈',
  '🙌',
  '🙏',
  '☝',
  '👏',
  '💪',
  '🚶',
  '🏃',
  '💃',
  '👫',
  '👪',
  '👬',
  '👭',
  '💏',
  '💑',
  '👯',
  '🙆',
  '🙅',
  '💁',
  '🙋',
  '💆',
  '💇',
  '💅',
  '👰',
  '🙎',
  '🙍',
  '🙇',
  '🎩',
  '👑',
  '👒',
  '👟',
  '👞',
  '👡',
  '👠',
  '👢',
  '👕',
  '👔',
  '👚',
  '👗',
  '🎽',
  '👖',
  '👘',
  '👙',
  '💼',
  '👜',
  '👝',
  '👛',
  '👓',
  '🎀',
  '🌂',
  '💄',
  '💛',
  '💙',
  '💜',
  '💚',
  '❤',
  '💔',
  '💗',
  '💓',
  '💕',
  '💖',
  '💞',
  '💘',
  '💌',
  '💋',
  '💍',
  '💎',
  '👤',
  '👥',
  '💬',
  '👣',
  '💭',
  '🐶',
  '🐺',
  '🐱',
  '🐭',
  '🐹',
  '🐰',
  '🐸',
  '🐯',
  '🐨',
  '🐻',
  '🐷',
  '🐽',
  '🐮',
  '🐗',
  '🐵',
  '🐒',
  '🐴',
  '🐑',
  '🐘',
  '🐼',
  '🐧',
  '🐦',
  '🐤',
  '🐥',
  '🐣',
  '🐔',
  '🐍',
  '🐢',
  '🐛',
  '🐝',
  '🐜',
  '🐞',
  '🐌',
  '🐙',
  '🐚',
  '🐠',
  '🐟',
  '🐬',
  '🐳',
  '🐋',
  '🐄',
  '🐏',
  '🐀',
  '🐃',
  '🐅',
  '🐇',
  '🐉',
  '🐎',
  '🐐',
  '🐓',
  '🐕',
  '🐖',
  '🐁',
  '🐂',
  '🐲',
  '🐡',
  '🐊',
  '🐫',
  '🐪',
  '🐆',
  '🐈',
  '🐩',
  '🐾',
  '💐',
  '🌸',
  '🌷',
  '🍀',
  '🌹',
  '🌻',
  '🌺',
  '🍁',
  '🍃',
  '🍂',
  '🌿',
  '🌾',
  '🍄',
  '🌵',
  '🌴',
  '🌲',
  '🌳',
  '🌰',
  '🌱',
  '🌼',
  '🌐',
  '🌞',
  '🌝',
  '🌚',
  '🌑',
  '🌒',
  '🌓',
  '🌔',
  '🌕',
  '🌖',
  '🌗',
  '🌘',
  '🌜',
  '🌛',
  '🌙',
  '🌍',
  '🌎',
  '🌏',
  '🌋',
  '🌌',
  '🌠',
  '⭐',
  '☀',
  '⛅',
  '☁',
  '⚡',
  '☔',
  '❄',
  '⛄',
  '🌀',
  '🌁',
  '🌈',
  '🌊',
  '🎍',
  '💝',
  '🎎',
  '🎒',
  '🎓',
  '🎏',
  '🎆',
  '🎇',
  '🎐',
  '🎑',
  '🎃',
  '👻',
  '🎅',
  '🎄',
  '🎁',
  '🎋',
  '🎉',
  '🎊',
  '🎈',
  '🎌',
  '🔮',
  '🎥',
  '📷',
  '📹',
  '📼',
  '💿',
  '📀',
  '💽',
  '💾',
  '💻',
  '📱',
  '☎',
  '📞',
  '📟',
  '📠',
  '📡',
  '📺',
  '📻',
  '🔊',
  '🔉',
  '🔈',
  '🔇',
  '🔔',
  '🔕',
  '📢',
  '📣',
  '⏳',
  '⌛',
  '⏰',
  '⌚',
  '🔓',
  '🔒',
  '🔏',
  '🔐',
  '🔑',
  '🔎',
  '💡',
  '🔦',
  '🔆',
  '🔅',
  '🔌',
  '🔋',
  '🔍',
  '🛁',
  '🛀',
  '🚿',
  '🚽',
  '🔧',
  '🔩',
  '🔨',
  '🚪',
  '🚬',
  '💣',
  '🔫',
  '🔪',
  '💊',
  '💉',
  '💰',
  '💴',
  '💵',
  '💷',
  '💶',
  '💳',
  '💸',
  '📲',
  '📧',
  '📥',
  '📤',
  '✉',
  '📩',
  '📨',
  '📯',
  '📫',
  '📪',
  '📬',
  '📭',
  '📮',
  '📦',
  '📝',
  '📄',
  '📃',
  '📑',
  '📊',
  '📈',
  '📉',
  '📜',
  '📋',
  '📅',
  '📆',
  '📇',
  '📁',
  '📂',
  '✂',
  '📌',
  '📎',
  '✒',
  '✏',
  '📏',
  '📐',
  '📕',
  '📗',
  '📘',
  '📙',
  '📓',
  '📔',
  '📒',
  '📚',
  '📖',
  '🔖',
  '📛',
  '🔬',
  '🔭',
  '📰',
  '🎨',
  '🎬',
  '🎤',
  '🎧',
  '🎼',
  '🎵',
  '🎶',
  '🎹',
  '🎻',
  '🎺',
  '🎷',
  '🎸',
  '👾',
  '🎮',
  '🃏',
  '🎴',
  '🀄',
  '🎲',
  '🎯',
  '🏈',
  '🏀',
  '⚽',
  '⚾',
  '🎾',
  '🎱',
  '🏉',
  '🎳',
  '⛳',
  '🚵',
  '🚴',
  '🏁',
  '🏇',
  '🏆',
  '🎿',
  '🏂',
  '🏊',
  '🏄',
  '🎣',
  '☕',
  '🍵',
  '🍶',
  '🍼',
  '🍺',
  '🍻',
  '🍸',
  '🍹',
  '🍷',
  '🍴',
  '🍕',
  '🍔',
  '🍟',
  '🍗',
  '🍖',
  '🍝',
  '🍛',
  '🍤',
  '🍱',
  '🍣',
  '🍥',
  '🍙',
  '🍘',
  '🍚',
  '🍜',
  '🍲',
  '🍢',
  '🍡',
  '🍳',
  '🍞',
  '🍩',
  '🍮',
  '🍦',
  '🍨',
  '🍧',
  '🎂',
  '🍰',
  '🍪',
  '🍫',
  '🍬',
  '🍭',
  '🍯',
  '🍎',
  '🍏',
  '🍊',
  '🍋',
  '🍒',
  '🍇',
  '🍉',
  '🍓',
  '🍑',
  '🍈',
  '🍌',
  '🍐',
  '🍍',
  '🍠',
  '🍆',
  '🍅',
  '🌽',
  '🏠',
  '🏡',
  '🏫',
  '🏢',
  '🏣',
  '🏥',
  '🏦',
  '🏪',
  '🏩',
  '🏨',
  '💒',
  '⛪',
  '🏬',
  '🏤',
  '🌇',
  '🌆',
  '🏯',
  '🏰',
  '⛺',
  '🏭',
  '🗼',
  '🗾',
  '🗻',
  '🌄',
  '🌅',
  '🌃',
  '🗽',
  '🌉',
  '🎠',
  '🎡',
  '⛲',
  '🎢',
  '🚢',
  '⛵',
  '🚤',
  '🚣',
  '⚓',
  '🚀',
  '✈',
  '💺',
  '🚁',
  '🚂',
  '🚊',
  '🚉',
  '🚞',
  '🚆',
  '🚄',
  '🚅',
  '🚈',
  '🚇',
  '🚝',
  '🚋',
  '🚃',
  '🚎',
  '🚌',
  '🚍',
  '🚙',
  '🚘',
  '🚗',
  '🚕',
  '🚖',
  '🚛',
  '🚚',
  '🚨',
  '🚓',
  '🚔',
  '🚒',
  '🚑',
  '🚐',
  '🚲',
  '🚡',
  '🚟',
  '🚠',
  '🚜',
  '💈',
  '🚏',
  '🎫',
  '🚦',
  '🚥',
  '⚠',
  '🚧',
  '🔰',
  '⛽',
  '🏮',
  '🎰',
  '♨',
  '🗿',
  '🎪',
  '🎭',
  '📍',
  '🚩',
  '⬆',
  '⬇',
  '⬅',
  '➡',
  '🔠',
  '🔡',
  '🔤',
  '↗',
  '↖',
  '↘',
  '↙',
  '↔',
  '↕',
  '🔄',
  '◀',
  '▶',
  '🔼',
  '🔽',
  '↩',
  '↪',
  'ℹ',
  '⏪',
  '⏩',
  '⏫',
  '⏬',
  '⤵',
  '⤴',
  '🆗',
  '🔀',
  '🔁',
  '🔂',
  '🆕',
  '🆙',
  '🆒',
  '🆓',
  '🆖',
  '📶',
  '🎦',
  '🈁',
  '🈯',
  '🈳',
  '🈵',
  '🈴',
  '🈲',
  '🉐',
  '🈹',
  '🈺',
  '🈶',
  '🈚',
  '🚻',
  '🚹',
  '🚺',
  '🚼',
  '🚾',
  '🚰',
  '🚮',
  '🅿',
  '♿',
  '🚭',
  '🈷',
  '🈸',
  '🈂',
  'Ⓜ',
  '🛂',
  '🛄',
  '🛅',
  '🛃',
  '🉑',
  '㊙',
  '㊗',
  '🆑',
  '🆘',
  '🆔',
  '🚫',
  '🔞',
  '📵',
  '🚯',
  '🚱',
  '🚳',
  '🚷',
  '🚸',
  '⛔',
  '✳',
  '❇',
  '❎',
  '✅',
  '✴',
  '💟',
  '🆚',
  '📳',
  '📴',
  '🅰',
  '🅱',
  '🆎',
  '🅾',
  '💠',
  '➿',
  '♻',
  '♈',
  '♉',
  '♊',
  '♋',
  '♌',
  '♍',
  '♎',
  '♏',
  '♐',
  '♑',
  '♒',
  '♓',
  '⛎',
  '🔯',
  '🏧',
  '💹',
  '💲',
  '💱',
  '©',
  '®',
  '™',
  '〽',
  '〰',
  '🔝',
  '🔚',
  '🔙',
  '🔛',
  '🔜',
  '❌',
  '⭕',
  '❗',
  '❓',
  '❕',
  '❔',
  '🔃',
  '🕛',
  '🕧',
  '🕐',
  '🕜',
  '🕑',
  '🕝',
  '🕒',
  '🕞',
  '🕓',
  '🕟',
  '🕔',
  '🕠',
  '🕕',
  '🕖',
  '🕗',
  '🕘',
  '🕙',
  '🕚',
  '🕡',
  '🕢',
  '🕣',
  '🕤',
  '🕥',
  '🕦',
  '✖',
  '➕',
  '➖',
  '➗',
  '♠',
  '♥',
  '♣',
  '♦',
  '💮',
  '💯',
  '✔',
  '☑',
  '🔘',
  '🔗',
  '➰',
  '🔱',
  '🔲',
  '🔳',
  '◼',
  '◻',
  '◾',
  '◽',
  '▪',
  '▫',
  '🔺',
  '⬜',
  '⬛',
  '⚫',
  '⚪',
  '🔴',
  '🔵',
  '🔻',
  '🔶',
  '🔷',
  '🔸',
  '🔹',
]

const generateRandomEmoji = () =>
  emojis[Math.floor(Math.random() * emojis.length)]

export { generateRandomEmoji }
