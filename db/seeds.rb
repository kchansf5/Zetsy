# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(
  username: 'demouser',
  password: 'password'
)

Product.create!(
  product_name: 'Royal Broadsword',
  description: "The Hyrulean royal family would award this sword to knights who achieved remarkable feats. A sword that balances strength and beauty as elegantly as this one is a rare find.",
  price: 1200,
  image_url: 'https://c-6rtwjumjzx7877x24i6z0u8q9bufd8px2ehqtzikwtsyx2esjy.g00.gamepedia.com/g00/3_c-6ejqif.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2fejqif_lfrjujinf_jsx2fjx2fj1x2fGtyB_Wtdfq_Gwtfix78btwi_Nhts.uslx3fajwx78ntsx3dk6h8j49jk1f052kf7h82f558084gg4f7x26n65h.rfwpx3dnrflj_$/$/$/$/$'
)

Product.create!(
  product_name: 'Royal Claymore',
  description: "A two-handed sword issued to the Hyrulean royal family's immediate guard detail. Its powerful strikes are said to crush an opponent's body and resolve alike.",
  price: 1200,
  image_url: 'https://c-6rtwjumjzx7877x24i6z0u8q9bufd8px2ehqtzikwtsyx2esjy.g00.gamepedia.com/g00/3_c-6ejqif.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2fejqif_lfrjujinf_jsx2f7x2f78x2fGtyB_Wtdfq_Hqfdrtwj_Nhts.uslx3fajwx78ntsx3d78h31h8j542f703j6i744if57j159jfix26n65h.rfwpx3dnrflj_$/$/$/$/$'
)

Product.create!(
  product_name: 'Royal Halberd',
  description: "This spear was issued to the knights who guarded Hyrule Castle's throne room. Its ornate design was applied by a craftsman in service to the royal family.",
  price: 1200,
  image_url: 'https://c-6rtwjumjzx7877x24i6z0u8q9bufd8px2ehqtzikwtsyx2esjy.g00.gamepedia.com/g00/3_c-6ejqif.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2fejqif_lfrjujinf_jsx2fix2fijx2fGtyB_Wtdfq_Mfqgjwi_Nhts.uslx3fajwx78ntsx3dk57323j407j1g2645ki60i5if7f9khk5x26n65h.rfwpx3dnrflj_$/$/$/$/$'
)

Product.create!(
  product_name: 'Ancient Short Sword',
  description: "The blade of this sword was made using an ancient power lost to this modern age. It's blade appears only when drawn, and its cutting power surpasses metal swords.",
  price: 1000,
  image_url: 'https://c-6rtwjumjzx7877x24i6z0u8q9bufd8px2ehqtzikwtsyx2esjy.g00.gamepedia.com/g00/3_c-6ejqif.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2fejqif_lfrjujinf_jsx2f1x2f10x2fGtyB_Fshnjsy_Xmtwy_Xbtwi_Nhts.uslx3fajwx78ntsx3d281iih3i593432g29j8f52ii4hjg6j91x26n65h.rfwpx3dnrflj_$/$/$/$/$'
)

Product.create!(
  product_name: 'Flameblade',
  description: "This magical sword was forged in the lava of Death Mountain. It leaves white-hot flames in its wake when the blade glows red.",
  price: 900,
  image_url: 'https://c-6rtwjumjzx7877x24i6z0u8q9bufd8px2ehqtzikwtsyx2esjy.g00.gamepedia.com/g00/3_c-6ejqif.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2fejqif_lfrjujinf_jsx2f4x2f46x2fGtyB_Kqfrjgqfij_Nhts.uslx3fajwx78ntsx3difg9670g2fj160ih11jkh3h11i3hk568x26n65h.rfwpx3dnrflj_$/$/$/$/$'
)

Product.create!(
  product_name: 'Frostblade',
  description: "A magical sword forged in the frigid mountains of the Hebra region. When the blade glows blue, enemies struck by it will become frozen.",
  price: 900,
  image_url: 'https://c-6rtwjumjzx7877x24i6z0u8q9bufd8px2ehqtzikwtsyx2esjy.g00.gamepedia.com/g00/3_c-6ejqif.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2fejqif_lfrjujinf_jsx2f9x2f98x2fGtyB_Kwtx78ygqfij_Nhts.uslx3fajwx78ntsx3d9h055780fgi55i5kh2064g48kkjg6j0ix26n65h.rfwpx3dnrflj_$/$/$/$/$'
)

Product.create!(
  product_name: 'Thunderblade',
  description: "A magical sword forged and refined by lightning from the Hyrule Hills. When the blade shines with a golden light, it will electrocute enemies struck by it.",
  price: 900,
  image_url: 'https://c-6rtwjumjzx7877x24i6z0u8q9bufd8px2ehqtzikwtsyx2esjy.g00.gamepedia.com/g00/3_c-6ejqif.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2fejqif_lfrjujinf_jsx2f8x2f83x2fGtyB_Ymzsijwgqfij_Nhts.uslx3fajwx78ntsx3d91jk64h989402g5fih1j87fj9k6f4gf3x26n65h.rfwpx3dnrflj_$/$/$/$/$'
)

Product.create!(
  product_name: 'Bow of Light',
  description: "Princess Zelda gave Link this bow and arrow for the battle against dark Beast Ganon. When wielded by the hero, it fires arros of pure light strong enough to oppose the Calamity.",
  price: 2500,
  image_url: 'https://c-6rtwjumjzx7877x24i6z0u8q9bufd8px2ehqtzikwtsyx2esjy.g00.gamepedia.com/g00/3_c-6ejqif.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2fejqif_lfrjujinf_jsx2fhx2fh8x2fGtyB_Gtb_tk_Qnlmy_Nhts.uslx3fajwx78ntsx3d14gk154j717071023002i10j52kig0h7x26n65h.rfwpx3dnrflj_$/$/$/$/$'
)

Product.create!(
  product_name: 'Lynel Crusher',
  description: "This two-handed weapon is favored by the Lynels. It may be more accurate to call it a lump of metal than a weapon, but if wielded by a Lynel, it can pound you into a fine dust.",
  price: 1300,
  image_url: 'https://c-6rtwjumjzx7877x24i6z0u8q9bufd8px2ehqtzikwtsyx2esjy.g00.gamepedia.com/g00/3_c-6ejqif.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2fejqif_lfrjujinf_jsx2fhx2fh4x2fGtyB_Qdsjq_Hwzx78mjw_Nhts.uslx3fajwx78ntsx3d6i674gff8645gg66hh8500035jji3144x26n65h.rfwpx3dnrflj_$/$/$/$/$'
)

Product.create!(
  product_name: 'Mighty Lynel Crusher',
  description: "This Lynel-made two-handed weapon has been reinforced to increase its durability and striking power. Its overwhelming heft will crush your foe, shield and all.",
  price: 1400,
  image_url: 'https://c-6rtwjumjzx7877x24i6z0u8q9bufd8px2ehqtzikwtsyx2esjy.g00.gamepedia.com/g00/3_c-6ejqif.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2fejqif_lfrjujinf_jsx2fix2fikx2fGtyB_Rnlmyd_Qdsjq_Hwzx78mjw_Nhts.uslx3fajwx78ntsx3d60i49311j78264gfhfi1381ff6j6i3ffx26n65h.rfwpx3dnrflj_$/$/$/$/$'
)

Product.create!(
  product_name: 'Savage Lynel Crusher',
  description: "This Lynel-made two-handed weapon is immensely heavy thanks to a rare metal from Death Mountain's peak. The power of its downward swing is in a class all its own.",
  price: 1500,
  image_url: 'https://c-6rtwjumjzx7877x24i6z0u8q9bufd8px2ehqtzikwtsyx2esjy.g00.gamepedia.com/g00/3_c-6ejqif.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2fejqif_lfrjujinf_jsx2fkx2fk9x2fGtyB_Xfaflj_Qdsjq_Hwzx78mjw_Nhts.uslx3fajwx78ntsx3d352752hf9472i134j2591474i25ff64kx26n65h.rfwpx3dnrflj_$/$/$/$/$'
)

Product.create!(
  product_name: 'Scimitar of the Seven',
  description: "A famous sword once beloved by the Gerudo Champion Urbosa. It is said that when Urbosa swung this sword in battle, her movements resembled a beautiful dance.",
  price: 3000,
  image_url: 'https://c-6rtwjumjzx7877x24i6z0u8q9bufd8px2ehqtzikwtsyx2esjy.g00.gamepedia.com/g00/3_c-6ejqif.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2fejqif_lfrjujinf_jsx2fgx2fg0x2fGtyB_Rttsqnlmy_Xhnrnyfw_Nhts.uslx3fajwx78ntsx3d7050g4h44j17k95j1jkk5fif71g20f8hx26n65h.rfwpx3dnrflj_$/$/$/$/$'
)

Product.create!(
  product_name: 'Boulder Breaker',
  description: "This two-handed weapon was once wielded by the Goron Champion Daruk. Daruk made swinging it around look easy, but a Hylian would need an immense amount of strength.",
  price: 3000,
  image_url: 'https://c-6rtwjumjzx7877x24i6z0u8q9bufd8px2ehqtzikwtsyx2esjy.g00.gamepedia.com/g00/3_c-6ejqif.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2fejqif_lfrjujinf_jsx2f7x2f7fx2fGtyB_Gtzqijw_Gwjfpjw_Nhts.uslx3fajwx78ntsx3d49k2j3k940i9gji3k5h30i940k61f6j5x26n65h.rfwpx3dnrflj_$/$/$/$/$'
)

Product.create!(
  product_name: 'Lightscale Trident',
  description: "A spear of peerless grace cherished by the Zora Champion Mipha. Although Mipha specialized in healing abilities, her spearmanship was in a class all its own.",
  price: 3000,
  image_url: 'https://c-6rtwjumjzx7877x24i6z0u8q9bufd8px2ehqtzikwtsyx2esjy.g00.gamepedia.com/g00/3_c-6ejqif.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2fejqif_lfrjujinf_jsx2f0x2f0ix2fGtyB_Qnlmyx78hfqj_Ywnijsy_Nhts.uslx3fajwx78ntsx3dk7k9108454g57g9988f922g541f1638hx26n65h.rfwpx3dnrflj_$/$/$/$/$'
)

Product.create!(
  product_name: 'Great Eagle Bow',
  description: "A bow without equal wielded by the Rito Champion, Revali. It's said Revali could loose arrows with the speed of a gale, making him supreme in aerial combat.",
  price: 3000,
  image_url: 'https://vignette.wikia.nocookie.net/zelda/images/9/95/Breath_of_the_Wild_Rito_Champion%27s_Bow_Great_Eagle_Bow_%28Icon%29.png/revision/latest?cb=20170421175354'
)







Product.create!(
  product_name: 'Hylian Shield',
  description: "A shield passed down through the Hyrulean royal family, along with the legend of the hero who wielded it. Its defensive capabilities and durability outshine all other shields.",
  price: 3000,
  image_url: 'https://c-6rtwjumjzx7877x24i6z0u8q9bufd8px2ehqtzikwtsyx2esjy.g00.gamepedia.com/g00/3_c-6ejqif.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2fejqif_lfrjujinf_jsx2f5x2f51x2fGtyB_Mdqnfs_Xmnjqi_Nhts.uslx3fajwx78ntsx3d22k42556k6767k2776f42478hgj13109x26n65h.rfwpx3dnrflj_$/$/$/$/$'
)

Product.create!(
  product_name: 'Wooden Shield',
  description: "This lightweight, simple shield is ideal for less-experienced fighters. It can withstand light attacks, but blocking stronger blows is not recommended.",
  price: 100,
  image_url: 'https://c-6rtwjumjzx7877x24i6z0u8q9bufd8px2ehqtzikwtsyx2esjy.g00.gamepedia.com/g00/3_c-6ejqif.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2fejqif_lfrjujinf_jsx2fgx2fg3x2fGtyB_Bttijs_Xmnjqi_Nhts.uslx3fajwx78ntsx3d3i60k9630743934k0070i9j4k2201i05x26n65h.rfwpx3dnrflj_$/$/$/$/$'
)

Product.create!(
  product_name: "Traveler's Shield",
  description: "A sturdy shield loved by many an adventurer. It is made of animal hide and sturdy wood and is best suited to defending against weak monsters or animals.",
  price: 200,
  image_url: 'https://c-6rtwjumjzx7877x24i6z0u8q9bufd8px2ehqtzikwtsyx2esjy.g00.gamepedia.com/g00/3_c-6ejqif.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2fejqif_lfrjujinf_jsx2f5x2f51x2fGtyB_Ywfajqjwx2572x78_Xmnjqi_Nhts.uslx3fajwx78ntsx3d66738833f5j78fkfi6k69ijkjk07117jx26n65h.rfwpx3dnrflj_$/$/$/$/$'
)

Product.create!(
  product_name: "Soldier's Shield",
  description: "A shield once used by the guards of Hyrule Castle. It's easy to handle, but its core is made of wood, so it can catch fire.",
  price: 400,
  image_url: 'https://c-6rtwjumjzx7877x24i6z0u8q9bufd8px2ehqtzikwtsyx2esjy.g00.gamepedia.com/g00/3_c-6ejqif.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2fejqif_lfrjujinf_jsx2fjx2fj7x2fGtyB_Xtqinjwx2572x78_Xmnjqi_Nhts.uslx3fajwx78ntsx3d9j356k8i0h5g8i81j9ki73403k9i8hf7x26n65h.rfwpx3dnrflj_$/$/$/$/$'
)

Product.create!(
  product_name: "Kite Shield",
  description: "Rito warriors cherish this shield. Its unique shape is designed with mid-battle flight in mind to facilitate aerial combat.",
  price: 500,
  image_url: 'https://c-6rtwjumjzx7877x24i6z0u8q9bufd8px2ehqtzikwtsyx2esjy.g00.gamepedia.com/g00/3_c-6ejqif.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2fejqif_lfrjujinf_jsx2fjx2fjix2fGtyB_Pnyj_Xmnjqi_Nhts.uslx3fajwx78ntsx3d03j6k156h31g5h83g63h149j0833hj2ix26n65h.rfwpx3dnrflj_$/$/$/$/$'
)


Product.create!(
  product_name: "Knight's Shield",
  description: "A shield favored by the knights who served the Hyrulean royal family. Its sturdy metal construction makes it quite durable, but its weight requires decent skill to wield.",
  price: 600,
  image_url: 'https://c-6rtwjumjzx7877x24i6z0u8q9bufd8px2ehqtzikwtsyx2esjy.g00.gamepedia.com/g00/3_c-6ejqif.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2fejqif_lfrjujinf_jsx2f9x2f99x2fGtyB_Psnlmyx2572x78_Xmnjqi_Nhts.uslx3fajwx78ntsx3d812gg6i512h1353hi84g4407i32j6722x26n65h.rfwpx3dnrflj_$/$/$/$/$'
)

Product.create!(
  product_name: 'Royal Shield',
  description: "A shield issued to the Hyrulean royal family's immediate guard detail. It boasts a high defense, but these days it's more a collector's item due to its ornamentation.",
  price: 1000,
  image_url: 'https://c-6rtwjumjzx7877x24i6z0u8q9bufd8px2ehqtzikwtsyx2esjy.g00.gamepedia.com/g00/3_c-6ejqif.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2fejqif_lfrjujinf_jsx2fix2fi3x2fGtyB_Wtdfq_Xmnjqi_Nhts.uslx3fajwx78ntsx3dh064j50k58843i9f384713jf624jk46ix26n65h.rfwpx3dnrflj_$/$/$/$/$'
)

Product.create!(
  product_name: 'Daybreaker',
  description: "A shield issued to the Hyrulean royal family's immediate guard detail. It boasts a high defense, but these days it's more a collector's item due to its ornamentation.",
  price: 1000,
  image_url: 'https://c-6rtwjumjzx7877x24i6z0u8q9bufd8px2ehqtzikwtsyx2esjy.g00.gamepedia.com/g00/3_c-6ejqif.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2fejqif_lfrjujinf_jsx2fix2fi3x2fGtyB_Wtdfq_Xmnjqi_Nhts.uslx3fajwx78ntsx3dh064j50k58843i9f384713jf624jk46ix26n65h.rfwpx3dnrflj_$/$/$/$/$'
)

Product.create!(
  product_name: 'Steel Lizal Shield',
  description: "This Lizal shield is adorned with several metal shells as a means of reinforcement. Its defensive capabilities are high, but its weight requires a skilled soldier to bear.",
  price: 800,
  image_url: 'https://c-6rtwjumjzx7877x24i6z0u8q9bufd8px2ehqtzikwtsyx2esjy.g00.gamepedia.com/g00/3_c-6ejqif.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2fejqif_lfrjujinf_jsx2f5x2f5fx2fGtyB_Xyjjq_Qnefq_Xmnjqi_Nhts.uslx3fajwx78ntsx3d4468i989j91jj85j060g76i485j975h7x26n65h.rfwpx3dnrflj_$/$/$/$/$'
)

Product.create!(
  product_name: 'Savage Lynel Shield',
  description: "This ultimate Lynel shield is used only by the white-haired Lynels. It excels at defending against even the most brutal of attacks and cutting down powerful fores when deflecting.",
  price: 1000,
  image_url: 'https://c-6rtwjumjzx7877x24i6z0u8q9bufd8px2ehqtzikwtsyx2esjy.g00.gamepedia.com/g00/3_c-6ejqif.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2fejqif_lfrjujinf_jsx2fgx2fggx2fGtyB_Xfaflj_Qdsjq_Xmnjqi_Nhts.uslx3fajwx78ntsx3d1g405fj7833f938hiki4303gkifhf007x26n65h.rfwpx3dnrflj_$/$/$/$/$'
)







Product.create!(
  product_name: "Soldier's Helm",
  description: "Headgear made from sturdy metals for frontline soldiers. Praised for their defensive capabilities, the only helms that remain are those that survived the Calamity.",
  price: 200,
  image_url: 'https://c-6rtwjumjzx7877x24i6z0u8q9bufd8px2ehqtzikwtsyx2esjy.g00.gamepedia.com/g00/3_c-6ejqif.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2fejqif_lfrjujinf_jsx2fgx2fg3x2fGtyB_Xtqinjwx2572x78_Mjqr_Nhts.uslx3fajwx78ntsx3dj303096i61h72h60gkgf0119j78075jfx26n65h.rfwpx3dnrflj_$/$/$/$/$'
)

Product.create!(
  product_name: 'Flamebreaker Helm',
  description: "Stone headgear made by Goron craftsmen to protect tourists visiting Goron City. As if its flame resistance isn't enough of a selling point, it also covers your entire head!",
  price: 400,
  image_url: 'https://c-6rtwjumjzx7877x24i6z0u8q9bufd8px2ehqtzikwtsyx2esjy.g00.gamepedia.com/g00/3_c-6ejqif.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2fejqif_lfrjujinf_jsx2fkx2fk4x2fGtyB_Kqfrjgwjfpjw_Mjqr_Nhts.uslx3fajwx78ntsx3d216j030gjih12h3f3062g067i5if4747x26n65h.rfwpx3dnrflj_$/$/$/$/$'
)

Product.create!(
  product_name: 'Zora Helm',
  description: "Zora headgear made from dragon scales. Increases swimming speed and allows you to use Spin Attack.",
  price: 400,
  image_url: 'https://c-6rtwjumjzx7877x24i6z0u8q9bufd8px2ehqtzikwtsyx2esjy.g00.gamepedia.com/g00/3_c-6ejqif.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2fejqif_lfrjujinf_jsx2f8x2f8ix2fGtyB_Etwf_Mjqr_Nhts.uslx3fajwx78ntsx3d0ii9913j52gi2j775jk8g307k94hfj8jx26n65h.rfwpx3dnrflj_$/$/$/$/$'
)

Product.create!(
  product_name: 'Snowquill Headdress',
  description: "A Rito accessory made from snow-bird feathers. It's adorned with a ruby, a gem that harnesses the power of fire to make cold climates more tolerable.",
  price: 400,
  image_url: 'https://c-6rtwjumjzx7877x24i6z0u8q9bufd8px2ehqtzikwtsyx2esjy.g00.gamepedia.com/g00/3_c-6ejqif.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2fejqif_lfrjujinf_jsx2f4x2f45x2fGtyB_Xstbvznqq_Mjfiiwjx78x78_Nhts.uslx3fajwx78ntsx3d77708k5gkf885h49iik8ig5j18554hk9x26n65h.rfwpx3dnrflj_$/$/$/$/$'
)

Product.create!(
  product_name: 'Desert Voe Headband',
  description: "Gerudo armor for males. Contains sapphire, which harnesses the power of ice to make the heat more bearable.",
  price: 400,
  image_url: 'https://c-6rtwjumjzx7877x24i6z0u8q9bufd8px2ehqtzikwtsyx2esjy.g00.gamepedia.com/g00/3_c-6ejqif.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2fejqif_lfrjujinf_jsx2f0x2f0kx2fGtyB_Ijx78jwy_Atj_Mjfigfsi_Nhts.uslx3fajwx78ntsx3d314h6h847hi826014g1658887ffi8g93x26n65h.rfwpx3dnrflj_$/$/$/$/$'
)


Product.create!(
  product_name: "Soldier's Armor",
  description: "Hyrulean guards praised this armor for its superior defense. Made from sturdy plates of metal, the high level of craftsmanship that went into it is obvious with just a glance.",
  price: 600,
  image_url: 'https://c-6rtwjumjzx7877x24i6z0u8q9bufd8px2ehqtzikwtsyx2esjy.g00.gamepedia.com/g00/3_c-6ejqif.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2fejqif_lfrjujinf_jsx2f7x2f7hx2fGtyB_Xtqinjwx2572x78_Fwrtw_Nhts.uslx3fajwx78ntsx3dh45j7ihj72ij13kj4kjh8jjg5h644984x26n65h.rfwpx3dnrflj_$/$/$/$/$'
)

Product.create!(
  product_name: 'Flamebreaker Armor',
  description: "Armor crafted by Gorons for Hylians curious enough to visit Goron City. It's made from fire-resistant rocks to protect the wearer.",
  price: 800,
  image_url: 'https://c-6rtwjumjzx7877x24i6z0u8q9bufd8px2ehqtzikwtsyx2esjy.g00.gamepedia.com/g00/3_c-6ejqif.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2fejqif_lfrjujinf_jsx2fix2fi4x2fGtyB_Kqfrjgwjfpjw_Fwrtw_Nhts.uslx3fajwx78ntsx3d5k5fi1h1291j2f0h64g6f17jhgkf4hh2x26n65h.rfwpx3dnrflj_$/$/$/$/$'
)

Product.create!(
  product_name: 'Zora Armor',
  description: "Custom armor painstakingly crafted by each generation's Zora princess for her future husband. Wearing it will give you the ability to swim up waterfalls.",
  price: 800,
  image_url: 'https://c-6rtwjumjzx7877x24i6z0u8q9bufd8px2ehqtzikwtsyx2esjy.g00.gamepedia.com/g00/3_c-6ejqif.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2fejqif_lfrjujinf_jsx2f9x2f91x2fGtyB_Etwf_Fwrtw_Nhts.uslx3fajwx78ntsx3djjij21i2663fjhi51hgjg1ij16i367h2x26n65h.rfwpx3dnrflj_$/$/$/$/$'
)

Product.create!(
  product_name: 'Snowquill Tunic',
  description: "Lined with molted Rito feathers, this tunic was made by Rito artisans for Hylians visiting cold climates. The feathers are stacked in each layer to retain body heat.",
  price: 800,
  image_url: 'https://c-6rtwjumjzx7877x24i6z0u8q9bufd8px2ehqtzikwtsyx2esjy.g00.gamepedia.com/g00/3_c-6ejqif.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2fejqif_lfrjujinf_jsx2f1x2f1kx2fGtyB_Xstbvznqq_Yzsnh_Nhts.uslx3fajwx78ntsx3d7ik6f4hjfkkg4394883gkj288kjf43fix26n65h.rfwpx3dnrflj_$/$/$/$/$'
)

Product.create!(
  product_name: 'Desert Voe Spaulder',
  description: "Armor for males sold rarely by Gerudo retailers. It contains sapphire, which harnesses the power of ice to make hot climates more tolerable.",
  price: 800,
  image_url: 'https://c-6rtwjumjzx7877x24i6z0u8q9bufd8px2ehqtzikwtsyx2esjy.g00.gamepedia.com/g00/3_c-6ejqif.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2fejqif_lfrjujinf_jsx2f4x2f49x2fGtyB_Ijx78jwy_Atj_Xufzqijw_Nhts.uslx3fajwx78ntsx3di2i255k67f9039f0j0h55j163k277k97x26n65h.rfwpx3dnrflj_$/$/$/$/$'
)

Product.create!(
  product_name: "Soldier's Greeves",
  description: "Hyrulean guards favored these greaves. They owe their distinctly high defense to the metal plates they're made from, but the added weight takes some getting used to.",
  price: 400,
  image_url: 'https://c-6rtwjumjzx7877x24i6z0u8q9bufd8px2ehqtzikwtsyx2esjy.g00.gamepedia.com/g00/3_c-6ejqif.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2fejqif_lfrjujinf_jsx2f1x2f18x2fGtyB_Xtqinjwx2572x78_Lwjfajx78_Nhts.uslx3fajwx78ntsx3d6490hh67h2f7ig664jg73165264475jkx26n65h.rfwpx3dnrflj_$/$/$/$/$'
)

Product.create!(
  product_name: 'Flamebreaker Boots',
  description: "Goron artisans used flame-resistant rocks to craft these fireproof boots for curious Hylians visiting Goron City.",
  price: 600,
  image_url: 'https://c-6rtwjumjzx7877x24i6z0u8q9bufd8px2ehqtzikwtsyx2esjy.g00.gamepedia.com/g00/3_c-6ejqif.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2fejqif_lfrjujinf_jsx2f4x2f4ix2fGtyB_Kqfrjgwjfpjw_Gttyx78_Nhts.uslx3fajwx78ntsx3di20ghh48g30f224hk8h8190kk08gfff7x26n65h.rfwpx3dnrflj_$/$/$/$/$'
)

Product.create!(
  product_name: 'Zora Greeves',
  description: "These greaves have been passed down among the Zora for generations. It's been said they're crafted using dragon scales. Equip them to swim faster.",
  price: 600,
  image_url: 'https://c-6rtwjumjzx7877x24i6z0u8q9bufd8px2ehqtzikwtsyx2esjy.g00.gamepedia.com/g00/3_c-6ejqif.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2fejqif_lfrjujinf_jsx2fgx2fg1x2fGtyB_Etwf_Lwjfajx78_Nhts.uslx3fajwx78ntsx3dk54j963051g9g86k8409g68jk8767413x26n65h.rfwpx3dnrflj_$/$/$/$/$'
)

Product.create!(
  product_name: 'Snowquill Trousers',
  description: "The Rito sell these trousers to Hylians in Rito Village. The inside is lined with Rito feathers, so they excel at retaining body heat.",
  price: 600,
  image_url: 'https://c-6rtwjumjzx7877x24i6z0u8q9bufd8px2ehqtzikwtsyx2esjy.g00.gamepedia.com/g00/3_c-6ejqif.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2fejqif_lfrjujinf_jsx2fix2fi1x2fGtyB_Xstbvznqq_Ywtzx78jwx78_Nhts.uslx3fajwx78ntsx3dkjk84h24h5528hhh06739h5749ijk87fx26n65h.rfwpx3dnrflj_$/$/$/$/$'
)

Product.create!(
  product_name: 'Desert Voe Trousers',
  description: "Gerudo-made trousers for men sold rarely by Gerudo retailers. Sapphire is used in their creation, which harnesses the power of ice to make the heat more tolerable.",
  price: 600,
  image_url: 'https://c-6rtwjumjzx7877x24i6z0u8q9bufd8px2ehqtzikwtsyx2esjy.g00.gamepedia.com/g00/3_c-6ejqif.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2fi6z0u8q9bufd8p.hqtzikwtsy.sjyx2fejqif_lfrjujinf_jsx2f4x2f40x2fGtyB_Ijx78jwy_Atj_Ywtzx78jwx78_Nhts.uslx3fajwx78ntsx3d8j6502022ji717kf7k50fig487j89864x26n65h.rfwpx3dnrflj_$/$/$/$/$'
)
