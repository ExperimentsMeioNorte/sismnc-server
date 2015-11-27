Meteor.methods({
  // to, from, subject, text
	'sendEmail': function(data) {
    // corrigir para validar o check correto
    /*check([
        data[0],
        data[1],
        data[2],
        data[3]
      ],
      [String]
    );*/

    this.unblock();

    Email.send({
      to: data[0],
      from: data[1],
      subject: data[2],
      html: data[3]
    });
  }
});