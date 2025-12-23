document.addEventListener('DOMContentLoaded', function () {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(el => {
      new bootstrap.Tooltip(el);
    });
  });

 document.getElementById('confirmDelete').addEventListener('click', function () {

    // 1️⃣ إغلاق مودال الحذف
    const deleteModal = bootstrap.Modal.getInstance(
      document.getElementById('deleteModal')
    );
    deleteModal.hide();

    // 2️⃣ فتح مودال النجاح بعد لحظة صغيرة
    setTimeout(() => {
      const successModal = new bootstrap.Modal(
        document.getElementById('successModal')
      );
      successModal.show();
    }, 300);

  });




  document.getElementById('testBtn').onclick = function () {
    window.location.href = "AddCategories.html";

  };

  // نختار كل الـ checkboxes في الجدول
  const checkboxes = document.querySelectorAll('table tbody input[type="checkbox"]');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      const row = this.closest('tr'); // نجيب الصف اللي فيه الـ checkbox
      if (this.checked) {
        row.classList.add('selected-row'); // نضيف الكلاس للصف
      } else {
        row.classList.remove('selected-row'); // نحذف الكلاس اذا تم الغاء التحديد
      }
    });
  });


// $(function () {
//   $('[data-toggle="tooltip"]').tooltip()
// })

//  function toggleSidebar() {
//     document.getElementById("sidebar").classList.toggle("active");
//   }



  // لمن اضغط على يس 

  // document.getElementById('saveBtn').addEventListener('click', function () {
  //   const toastEl = document.getElementById('saveToast');
  //   const toast = new bootstrap.Toast(toastEl);
  //   toast.show();
  // });

// مودال
  // document.getElementById('saveBtn').addEventListener('click', function () {
  //   const modal = new bootstrap.Modal(document.getElementById('successModal'));
  //   modal.show();
  // });

  // document.getElementById('testBtn').onclick = function () {
  //   window.location.href = "AddCategories.html";

  // };

