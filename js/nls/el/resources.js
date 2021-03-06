﻿define(
   ({
    map: {
      error: "Δεν είναι δυνατή η δημιουργία χάρτη"
    },
    onlineStatus: {
      offline: "Αυτή τη στιγμή εργάζεστε χωρίς σύνδεση. Η συλλογή στοιχείων θα αποθηκεύεται τοπικά μέχρι να είναι δυνατή η σύνδεση με το διακομιστή.",
      reconnecting: "Επανασύνδεση&hellip;",
      pending: "Θα υποβληθούν ${total} εκκρεμείς αλλαγές όταν αποκατασταθεί η σύνδεση δικτύου."
    },
    configure: {
      mapdlg: {
        items: {
          organizationLabel: "Οργανισμός",
          onlineLabel: "ArcGIS Online",
          contentLabel: "Περιεχόμενo",
          favoritesLabel: "Τα Αγαπημένα μου"
        },
        title: "Επιλογή web χάρτη",
        searchTitle: "Αναζήτηση",
        ok: "ΟΚ",
        cancel: "Άκυρο",
        placeholder: "Εισαγάγετε όρο αναζήτησης"
      },
      groupdlg: {
        items: {
          organizationLabel: "Οργανισμός",
          onlineLabel: "ArcGIS Online",
          contentLabel: "Περιεχόμενo",
          favoritesLabel: "Τα Αγαπημένα μου"
        },
        title: "Επιλογή ομάδας",
        searchTitle: "Αναζήτηση",
        ok: "ΟΚ",
        cancel: "Άκυρο",
        placeholder: "Εισαγάγετε όρο αναζήτησης"
      },
      sharedlg: {
        items: {},
        mailtoLinkDescription: "Ακολουθεί ένας σύνδεσμος σε GeoForm"
      }
    },
    user: {
      mgrs: "MGRS",
      usng: "USNG",
      utm: "UTM",
      utm_northing: "Κατακόρυφη συντεταγμένη",
      utm_easting: "Οριζόντια συντεταγμένη",
      utm_zone_number: "Αριθμός ζώνης",
      selectLayerTabText: "${formSection} Επιλέξτε φόρμα",
      geoFormGeneralTabText: "${formSection} Εισαγάγετε πληροφορίες",
      locationInformationText: "${formSection} Επιλέξτε τοποθεσία",
      submitInformationText: "${formSection} Συμπληρώστε τη φόρμα",
      submitInstructions: "Προσθέστε τις πληροφορίες αυτές στο χάρτη.",
      myLocationText: "Τρέχουσα τοποθεσία",
      locationDescriptionForMoreThanOneOption: "Καθορίστε την τοποθεσία για αυτήν την καταχώριση κάνοντας κλικ / πατώντας στο χάρτη ή χρησιμοποιώντας μία από τις παρακάτω επιλογές.",
      locationDescriptionForOneOption: "Καθορίστε την τοποθεσία για αυτήν την καταχώριση κάνοντας κλικ / πατώντας στο χάρτη ή χρησιμοποιώντας την παρακάτω επιλογή.",
      locationDescriptionForNoOption: "Καθορίστε την τοποθεσία για αυτήν την καταχώριση κάνοντας κλικ / πατώντας στο χάρτη.",
      addressText: "Αναζήτηση",
      geographic: "Γεωγρ. πλάτος/μήκος",
      locationTabText: "Τοποθεσία",
      locationPopupTitle: "Τοποθεσία",
      submitButtonText: "Υποβολή καταχώρισης",
      submitButtonTextLoading: "Υποβολή&hellip;",
      formValidationMessageAlertText: "Τα παρακάτω πεδία είναι απαιτούμενα:",
      selectLocation: "Επιλέξτε μια τοποθεσία για την υποβολή σας.",
      emptylatitudeAlertMessage: "Εισαγάγετε μια συντεταγμένη ${openLink}γεωγραφικού πλάτους${closeLink}.",
      emptylongitudeAlertMessage: "Εισαγάγετε μια συντεταγμένη ${openLink}γεωγραφικού μήκους${closeLink}.",
      shareUserTitleMessage: "Σας ευχαριστούμε για τη συνεισφορά σας!",
      entrySubmitted: "Η καταχώρισή σας έχει υποβληθεί στο χάρτη.",
      shareThisForm: "Κοινοποιήστε αυτήν τη φόρμα",
      shareUserTextMessage: "Πείτε σε άλλους να συνεισφέρουν χρησιμοποιώντας τις παρακάτω επιλογές.",
      addAttachmentFailedMessage: "Δεν είναι δυνατή η προσθήκη συνημμένου στο θεματικό επίπεδο",
      addFeatureFailedMessage: "Δεν είναι δυνατή η προσθήκη του στοιχείου στο θεματικό επίπεδο",
      noLayerConfiguredMessage: "Παρουσιάστηκε σφάλμα κατά τη φόρτωση ή την εύρεση ενός επεξεργάσιμου επιπέδου στοιχείων. Για να εμφανίσετε τη φόρμα και να αρχίσετε να συλλέγετε στοιχεία, προσθέστε ένα επεξεργάσιμο επίπεδο στοιχείων στο web χάρτη.",
      placeholderLatitude: "Γεωγραφικό πλάτος (Y)",
      placeholderLongitude: "Γεωγραφικό μήκος (X)",
      latitude: "Γεωγραφικό πλάτος",
      longitude: "Γεωγραφικό μήκος",
      findMyLocation: "Εντοπισμός της θέσης μου",
      finding: "Εντοπισμός&hellip;",
      backToTop: "Επιστροφή στην κορυφή",
      addressSearchText: "Η υποβολή σας θα εμφανιστεί εδώ. Μπορείτε να σύρετε την καρφίτσα για να διορθώσετε την τοποθεσία.",
      shareModalFormText: "Σύνδεσμος φόρμας",
      close: "Κλείσιμο",
      locationNotFound: "Δεν ήταν δυνατή η εύρεση της τοποθεσίας.",
      setLocation: "Ορισμός τοποθεσίας",
      find: "Βρείτε μια διεύθυνση ή ένα μέρος",
      attachment: "Συνημμένο",
      toggleDropdown: "Εναλλαγή πτυσσόμενης λίστας",
      invalidString: "Εισαγάγετε μια έγκυρη τιμή.",
      invalidSmallNumber: "Εισαγάγετε μια έγκυρη ${openStrong}ακέραιη${closeStrong} τιμή μεταξύ -32768 και 32767.",
      invalidNumber: "Εισαγάγετε μια έγκυρη ${openStrong}ακέραιη${closeStrong} τιμή μεταξύ -2147483648 και 2147483647.",
      invalidFloat: "Εισαγάγετε μια έγκυρη τιμή ${openStrong}κινητής υποδιαστολής${closeStrong}.",
      invalidDouble: "Εισαγάγετε μια έγκυρη τιμή ${openStrong}κινητής υποδιαστολής διπλής ακρίβειας${closeStrong}.",
      invalidLatLong: "Εισαγάγετε έγκυρες συντεταγμένες γεωγραφικού πλάτους και μήκους.",
      invalidUTM: "Εισαγάγετε έγκυρες συντεταγμένες UTM.",
      invalidUSNG: "Εισαγάγετε έγκυρες συντεταγμένες USNG.",
      invalidMGRS: "Εισαγάγετε έγκυρες συντεταγμένες MGRS.",
      geoformTitleText: "GeoForm",
      domainDefaultText: "Επιλέξτε&hellip;",
      applyEditsFailedMessage: "Λυπούμαστε, δεν είναι δυνατή η υποβολή της καταχώρισής σας. Δοκιμάστε ξανά.",
      requiredFields: "Υπάρχουν μερικά σφάλματα. Διορθώστε τα παρακάτω.",
      requiredField: "(απαιτούμενο)",
      error: "Σφάλμα",
      textRangeHintMessage: "${openStrong}Υπόδειξη:${closeStrong} ελάχιστη τιμή ${minValue} και μέγιστη τιμή ${maxValue}",
      dateRangeHintMessage: "${openStrong}Υπόδειξη:${closeStrong} ελάχιστη ημερομηνία ${minValue} και μέγιστη ημερομηνία ${maxValue}",
      remainingCharactersHintMessage: "Απομένουν ${value} χαρακτήρες",
      mapFullScreen: "Πλήρης οθόνη",
      mapRestore: "Επαναφορά",
      filterSelectEmptyText: "Επιλογή",
      invalidLayerMessage: "Το θεματικό επίπεδο φόρμας δεν υπάρχει. Διαμορφώστε την εφαρμογή και ορίστε το θεματικό επίπεδο.",
      selectedLayerText: "Όλα",
      fileUploadStatus: "Κατάσταση μεταφόρτωσης αρχείου",
      uploadingBadge: "&nbsp;Μεταφόρτωση&hellip;",
      successBadge: "&nbsp;Μεταφορτώθηκε",
      retryBadge: "Επανάληψη",
      errorBadge: "Σφάλμα στη μεταφόρτωση&nbsp;&nbsp;&nbsp;",
      fileTooLargeError: "Το αρχείο είναι πολύ μεγάλο για επισύναψη",
      exceededFileCountError: "Έχει ξεπεραστεί ο μέγιστος επιτρεπτός αριθμός συνημμένων",
      selectFileTitle: "Επιλέξτε ένα αρχείο",
      btnViewSubmissions: "Προβολή υποβολών",
      dateFormat: "DD/ΜΜ/YYYY hh:mm"
    },
    builder: {
      invalidUser: "Λυπούμαστε, δεν έχετε δικαίωμα προβολής αυτού του αντικειμένου",
      invalidWebmapSelectionAlert: "Ο επιλεγμένος web χάρτης δεν περιέχει ένα έγκυρο θεματικό επίπεδο για χρήση. Προσθέστε ένα επεξεργάσιμο Feature Layer στο web χάρτη για να συνεχίσετε.",
      invalidWebmapSelectionAlert2: "Για περισσότερες πληροφορίες, ανατρέξτε στο άρθρο ${openLink}Τι είναι το Feature Service;${closeLink}",
      selectFieldsText: "Επιλογή πεδίων φόρμας",
      selectThemeText: "Επιλογή θέματος φόρμας",
      webmapText: "Web χάρτης",
      layerText: "Θεματικό επίπεδο",
      detailsText: "Λεπτομέρειες",
      fieldsText: "Πεδία",
      styleText: "Στυλ",
      optionText: "Επιλογές",
      previewText: "Προεπισκόπηση",
      publishText: "Δημοσίευση",
      optionsApplicationText: "Επιλογές",
      titleText: "Εργαλείο δημιουργίας",
      descriptionText: "Το GeoForm είναι ένα πρότυπο, με δυνατότητα διαμόρφωσης, για επεξεργασία δεδομένων ενός ${link1}Feature Service${closeLink} μέσω φόρμας . Η εφαρμογή αυτή επιτρέπει στους χρήστες να εισάγουν δεδομένα μέσω μιας φόρμας αντί ενός αναδυόμενου παραθύρου του χάρτη, αξιοποιώντας παράλληλα την ισχύ του ${link2}web χάρτη${closeLink} και των επεξεργάσιμων Feature Service. Ακολουθήστε τα παρακάτω βήματα για να προσαρμόσετε και να υλοποιήσετε το GeoForm σας.",
      btnPreviousText: "Προηγούμενο",
      btnNextText: "Επόμενο",
      webmapTabTitleText: "Επιλογή web χάρτη",
      viewWebmap: "Προβολή web χάρτη",
      webmapDetailsText: "Ο επιλεγμένος web χάρτης είναι ${webMapTitleLink}${webMapTitle}${closeLink}. Για να επιλέξετε έναν διαφορετικό web χάρτη, κάντε κλικ στο κουμπί 'Επιλογή web χάρτη'.",
      btnSelectWebmapText: "Επιλέξτε web χάρτη",
      btnSelectWebmapTextLoading: "Φόρτωση&hellip;",
      layerTabTitleText: "Επιλογή επεξεργάσιμου επιπέδου",
      selectLayerLabelText: "Θεματικό επίπεδο",
      selectLayerDefaultOptionText: "Επιλογή θεματικού επιπέδου",
      defaultBasemap: "Εναλλαγή υποβάθρου",
      secondaryBasemap: "Προκαθορισμένο υπόβαθρο",
      detailsTabTitleText: "Λεπτομέρειες φόρμας",
      detailTitleLabelText: "Τίτλος",
      detailLogoLabelText: "Εικόνα λογοτύπου",
      descriptionLabelText: "Οδηγίες και λεπτομέρειες φόρμας",
      fieldDescriptionLabelText: "Κείμενο βοήθειας (προαιρετικό)",
      fieldTabFieldHeaderText: "Πεδίο",
      fieldTabLabelHeaderText: "Ετικέτα",
      fieldTabDisplayTypeHeaderText: "Εμφάνιση ως",
      fieldTabOrderColumnText: "Σειρά",
      fieldTabVisibleColumnText: "Ενεργοποιημένες",
      displayFieldText: "Πεδίο εμφάνισης",
      selectMenuOption: "Μενού επιλογής",
      selectRadioOption: "Κουμπί επιλογής",
      selectTextOption: "Κείμενο",
      selectDateOption: "Επιλογή ημερομηνίας",
      selectRangeOption: "Πλαίσιο αυξομείωσης τιμών",
      selectCheckboxOption: "Κουτί επιλογής",
      selectMailOption: "Email",
      selectUrlOption: "URL",
      selectTextAreaOption: "Περιοχή κειμένου",
      previewApplicationText: "Προεπισκόπηση εφαρμογής",
      saveApplicationText: "Αποθήκευση εφαρμογής",
      saveText: "Αποθήκευση",
      toggleNavigationText: "Εναλλαγή πλοήγησης",
      formPlaceholderText: "Η φόρμα μου",
      shareBuilderInProgressTitleMessage: "Δημοσίευση του GeoForm",
      shareBuilderProgressBarMessage: "Περιμένετε&hellip;",
      shareBuilderTitleMessage: "Επιτυχία! Το αντικείμενο αποθηκεύτηκε",
      shareBuilderTextMessage: "Μπορείτε να αρχίσετε να συλλέγετε πληροφορίες με κοινοποίηση σε άλλους",
      shareModalFormText: "Σύνδεσμος φόρμας",
      shareBuilderSuccess: "Το GeoForm σας έχει ενημερωθεί και δημοσιευτεί!",
      geoformTitleText: "Geo Form",
      layerTabText: "Αυτό είναι το θεματικό επίπεδο από το οποίο θα δημιουργηθεί το GeoForm. Το θεματικό επίπεδο πρέπει να είναι ένα Feature Service που είναι ενεργοποιημένο για επεξεργασία με δικαιώματα κοινοποίησης κατάλληλα για το κοινό σας.",
      detailsTabText: "Χρησιμοποιήστε τα παρακάτω πλαίσια Λεπτομέρειες φόρμας για να προσαρμόσετε τον τίτλο, να προσθέσετε ένα προσαρμοσμένο λογότυπο και να καταχωρίσετε μια σύντομη περιγραφή για το κοινό του GeoForm σας. Στην περιγραφή μπορείτε να προσθέσετε συνδέσμους προς άλλους πόρους, στοιχεία επικοινωνίας, ακόμη και να κατευθύνετε το κοινό σας σε μια διαδικτυακή χαρτογραφική εφαρμογή που παρουσιάζει όλα τα δεδομένα που συλλέγονται με το GeoForm.",
      fieldsTabText: "Εδώ μπορείτε να επιλέξετε ποια πεδία θα είναι ορατά στο κοινό του GeoForm σας, να επεξεργαστείτε τις ετικέτες που θα βλέπει και να προσθέσετε μια σύντομη περιγραφή για να διευκολύνετε την εισαγωγή δεδομένων.",
      styleTabText: "Διαμορφώστε το GeoForm σας χρησιμοποιώντας τα παρακάτω θέματα με βάση τις προτιμήσεις σας.",
      publishTabText: "Εάν έχετε ολοκληρώσει την προσαρμογή του GeoForm σας, αποθηκεύστε την εφαρμογή και αρχίστε να την κοινοποιείτε στο κοινό σας. Μπορείτε οποιαδήποτε στιγμή να επιστρέψετε σε αυτό το Εργαλείο δημιουργίας και να συνεχίσετε την προσαρμογή με βάση τις παρατηρήσεις.",
      headerSizeLabel: "Μέγεθος κεφαλίδας",
      smallHeader: "Χρήση μικρής κεφαλίδας",
      bigHeader: "Χρήση μεγάλης κεφαλίδας",
      pushpinText: "Πινέζα",
      doneButtonText: "Αποθήκευση και έξοδος",
      fieldTabPlaceHolderHeaderText: "Υπόδειξη (προαιρετικά)",
      enableAttachmentLabelText: "${openStrong}Ενεργοποίηση συνημμένων${closeStrong}",
      enableAttachmentLabelHint: "Μπορείτε να ενεργοποιήσετε/απενεργοποιήσετε τα συνημμένα εδώ",
      attachmentIsRequiredLabelText: "${openStrong}Απαιτείται συνημμένο${closeStrong}",
      attachmentIsRequiredLabelHint: "Εάν χρειάζεται, μπορεί να ζητηθεί από τους χρήστες να εισαγάγουν ένα συνημμένο.",
      attachmentLabelText: "Ετικέτα κουμπιού Επισύναψη",
      attachmentLabelHint: "Αυτό το κείμενο θα εμφανίζεται δίπλα στο κουμπί Επισύναψη. Μπορείτε να χρησιμοποιήσετε αυτόν το χώρο για να περιγράψετε τι θέλετε να επισυνάπτει το κοινό σας (φωτογραφία, βίντεο, έγγραφο κ.λπ.), τη μορφή αρχείου που ζητάτε (.jpeg, .png, .docx, .pdf κ.λπ.) και τυχόν πρόσθετες οδηγίες.",
      attachmentDescription: "Περιγραφή συνημμένου",
      attachmentHint: "Εάν χρειάζεται, μπορείτε εδώ να δώσετε πρόσθετες οδηγίες σχετικά με τα συνημμένα.",
      jumbotronDescription: "Χρησιμοποιήστε μεγάλη ή μικρή κεφαλίδα για τη φόρμα σας. Μια μεγάλη κεφαλίδα μπορεί να βοηθάει στον καθορισμό του σκοπού της εφαρμογής σας, αλλά καταλαμβάνει περισσότερο χώρο στην οθόνη σας.",
      shareGeoformText: "Κοινοποίηση του GeoForm",
      shareDescription: "Το πλαίσιο κοινοποίησης διευκολύνει το κοινό σας να κοινοποιεί το GeoForm σε άλλους συνεργάτες, αφού προγουμένως πραγματοποιήσουν κάποια υποβολή - αυτό μπορεί να απενεργοποιηθεί οποιαδήποτε στιγμή.",
      defaultMapExtent: "Προκαθορισμένη έκταση χάρτη",
      defaultMapExtentDescription: "Στο web χάρτη σας  μετά την υποβολή, θα γίνει επαναφορά στην προκαθορισμένη έκταση - αυτό μπορεί να απενεργοποιηθεί οποιαδήποτε στιγμή.",
      pushpinOptionsDescription: "Επιλέξτε από μια ποικιλία χρωμάτων για την πινέζα του χάρτη, η οποία θα πρέπει να διαφέρει από τα σύμβολα του χάρτη ώστε ο χρήστης να τοποθετεί εύκολα την υποβολή του στο χάρτη",
      selectLocationText: "Επιλογή τοποθεσίας με βάση",
      myLocationText: "Η τοποθεσία μου",
      searchText: "Αναζήτηση",
      coordinatesText: "Συντεταγμένες γεωγραφικού πλάτους και μήκους",
      usng: "Συντεταγμένες USNG",
      mgrs: "Συντεταγμένες MGRS",
      utm: "Συντεταγμένες UTM",
      selectLocationSDescription: "Δώστε τη δυνατότητα στους χρήστες να επιλέξουν μια τοποθεσία χρησιμοποιώντας αυτές τις μεθόδους.",
      dragTooltipText: "Σύρετε το πεδίο εκεί που θέλετε να εμφανίζεται",
      showHideLayerText: "Εμφάνιση θεματικού επιπέδου",
      showHideLayerHelpText: "Μπορείτε να διαμορφώσετε το GeoForm ώστε να γίνεται εμφάνιση/απόκρυψη θεματικού επιπέδου. Η επιλογή αυτή ισχύει για διαμόρφωση ενός μόνο θεματικού επιπέδου.",
      labelHelpMessage: "Ετικέτα",
      placeHolderHintMessage: "Κείμενο υπόδειξης",
      placeHolderHelpMessage: "Κείμενο βοήθειας",
      selectTextOptionValue: "Επιλογή φίλτρου",
      disableLogo: "Απενεργοποίηση λογοτύπου",
      disableLogoDescription: "Μπορείτε να διαμορφώσετε το GeoForm ώστε να γίνεται εμφάνιση/απόκρυψη του λογοτύπου στην κεφαλίδα φόρμας",
      locateOnLoadText: "Εντοπισμός κατά τη φόρτωση",
      locateOnLoadDescription: "Μπορείτε να διαμορφώσετε το GeoForm ώστε να γίνεται χρήση της τρέχουσας τοποθεσίας κατά τη φόρτωση της σελίδας",
      selectLayerFieldTabText: "Επιλογή θεματικού επιπέδου",
      allLayerSelectOptionText: "Όλα",
      disableViewer: "Απενεργοποίηση εργαλείου προβολής",
      disableViewerDescription: "Μπορείτε να διαμορφώσετε το GeoForm ώστε να γίνεται απενεργοποίηση/ενεργοποίηση του εργαλείου προβολής",
      displayFieldHintText: "Το επιλεγμένο πεδίο εμφάνισης θα εμφανίζεται στην κατάσταση προβολής ως πεδίο τίτλου"
    },
    viewer: {
      geocoderCancelText: "Άκυρο",
      viewReportsTabText: "Υποβολές",
      viewLegendTabText: "Υπόμνημα",
      viewAboutusTabText: "Πληροφορίες",
      viewMapTabText: "Χάρτης",
      sortHeaderText: "Ταξινόμηση κατά:",
      btnSubmitReportText: "Υποβολή αναφοράς",
      geocoderPlaceholderText: "Ταχυδρομικός κώδικας, πόλη κ.λπ.",
      noSearchResult: "Δεν βρέθηκε αποτέλεσμα",
      recordsTabTooltip: "Προβολή υποβολών",
      legendTabTooltip: "Υπόμνημα",
      aboutUsTabTooltip: "Σχετικά με εμάς",
      mapTabTooltip: "Χάρτης",
      appLoadingFailedMessage: "Η κατάσταση προβολής δεν είναι διαθέσιμη",
      btnDescendingText: "Φθίνουσα",
      btnAscendingText: "Αύξουσα",
      geometryUnavailableErrorMessage: "Δεν είναι δυνατό να βρεθεί η γεωμετρία του στοιχείου",
      infoPopupOffErrorMessage: "Το αναδυόμενο παράθυρο πληροφοριών δεν είναι ενεργοποιημένο",
      btnLoadMoreText: "Φόρτωση περισσότερων δεδομένων",
      unavailableTitleText: "Χωρίς τίτλο",
      unavailableConfigMessage: "Δεν είναι δυνατή η φόρτωση της διαμόρφωσης"
    }
  })
);