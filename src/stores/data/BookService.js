export const BookService = {
  getListBook() {
    return [
      {
        id: 1,
        image:
          "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/The_Midnight_Library.jpg/220px-The_Midnight_Library.jpg",
        title: "The Midnight Library",
        writer: "Matt Haig",
        price: 130000,
        condition: 4,
        summary:
          "A 2020 novel about a woman on the threshold between life and death who visits parallel versions of her life.",
        seller:"Sindi",
        noRek:"xxxxxxxxxxxxx",
        noHp:"080000000000",
        inStock: true,
      },
      {
        id: 2,
        image:
          "https://cdn.gramedia.com/uploads/items/9786020366517_Cantik-Itu-Luka-Hard-Cover---Limited-Edition.jpg",
        title: "Cantik Itu Luka",
        writer: "Eka Kurniawan",
        price: 170000,
        condition: 4,
        summary:
          "Across generations, the beautiful Indo prostitute Dewi Ayu, her daughters, and her grandchildren are beset by incest, murder, bestiality, rape, and the often fiercely vengeful undead.",
        seller:"Risma",
        noRek:"xxxxxxxxxxxxx",
        noHp:"080000000000",
        inStock: true,
      },
      {
        id: 3,
        image:
          "https://th.bing.com/th/id/OIP.6cJuM8OKJjr91R4Ryx7mNAHaLX?rs=1&pid=ImgDetMain",
        title: "Seperti Dendam, Rindu Harus Dibayar Tuntas",
        writer: "Eka Kurniawan",
        price: 90000,
        condition: 3,
        summary:
          "Ajo Kawir is one of the toughest fighters in the Javanese underworld, his fearlessness matched only by his unquenchable thirst for brawling. But the young thug is driven by a painful secret: he is impotent. When he finally meets his match in the form of the fearsome, beautiful bodyguard Iteung, Ajo is left bruised, battered, and overjoyed. He has fallen in love. But will he ever be able to make Iteung happy if he can’t get it up?",
        seller:"sindi",
        noRek:"xxxxxxxxxxxxx",
        noHp:"080000000000",
        inStock: true,
      },
    ];
  },

  getList() {
    return Promise.resolve(this.getListBook());
  },
};
