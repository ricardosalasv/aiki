from django.test import TestCase
from django.contrib.auth import get_user_model

class UserAccountTests(TestCase):

    def test_new_superuser(self):
        aiki_user = get_user_model()
        superuser = aiki_user.objects.create_superuser(
            'testsuperuser@super.com', 'username', 'firstname', 'password'
        )

        self.assertEqual(superuser.email, 'testsuperuser@super.com')
        self.assertEqual(superuser.user_name, 'username')
        self.assertEqual(superuser.first_name, 'firstname')
        self.assertTrue(superuser.is_superuser)
        self.assertTrue(superuser.is_active)
        self.assertEqual(str(superuser), 'username')

        with self.assertRaises(ValueError):
            superuser = aiki_user.objects.create_superuser(
                'testsuperuser@super.com', 'username', 'firstname', 'password', is_superuser=False
            )

        with self.assertRaises(ValueError):
            superuser = aiki_user.objects.create_superuser(
                None, 'username', 'firstname', 'password'
            )

        with self.assertRaises(ValueError):
            superuser = aiki_user.objects.create_superuser(
                'testsuperuser@super.com', 'username', 'firstname', 'password', is_staff=False
            )

    def test_new_user(self):
        aiki_user = get_user_model()
        user = aiki_user.objects.create_user(
            'testuser@user.com', 'username', 'firstname', 'password'
        )

        self.assertEqual(user.email, 'testuser@user.com')
        self.assertEqual(user.user_name, 'username')
        self.assertEqual(user.first_name, 'firstname')
        self.assertFalse(user.is_superuser)
        self.assertFalse(user.is_active)
        self.assertEqual(str(user), 'username')

        with self.assertRaises(ValueError):
            superuser = aiki_user.objects.create_superuser(
                None, 'username', 'firstname', 'password'
            )