<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class user1 extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id' => [
                'type'           => 'INT',
                'constraint'     => '20',
                'unsigned'       => true,
                'auto_increment' => true,
            ],
            'name' => [
                'type'       => 'VARCHAR',
                'constraint' => '50',
            ],
            'mobile_no' => [
                'type'       => 'text',
                'constraint' => '10',
            ],

            'emailaddress' => [
                'type'       => 'VARCHAR',
                'constraint' => '30',
            ],

            'address' => [
                
                'type'       => 'VARCHAR',
                'constraint' => '50',
            ],

            'password' => [
                
                'type'       => 'VARCHAR',
                'constraint' => '12',
            ],

        ]);
    
            $this->forge->addKey('id', true);
            $this->forge->createtable('user1');
        }
    
        public function down()
        {
            $this->forge->droptable('user1');
        }
    }